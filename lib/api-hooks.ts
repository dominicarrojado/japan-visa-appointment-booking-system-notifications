import { useState } from 'react';
import { getSearchParams } from './location';
import { ApiEndpoint, FetchState } from './types';
import { API_URL } from './constants';

export function useSubmitSubscribeRequest() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const submitSubscribeRequest = async (email: string): Promise<boolean> => {
    try {
      setFetchState(FetchState.LOADING);

      const axios = (await import('axios')).default;

      await axios.post(`${API_URL}${ApiEndpoint.SUBSCRIPTION_REQUESTS}`, {
        contact: email,
        contactMode: 'email',
        topics: ['japan-visa'],
      });

      setFetchState(FetchState.SUCCESS);

      return true;
    } catch (err) {
      setFetchState(FetchState.ERROR);
      return false;
    }
  };

  return [fetchState, submitSubscribeRequest] as const;
}

export function useVerifySubscription() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const verifySubscription = async () => {
    try {
      const id = getSearchParams('id');

      if (!id) {
        return setFetchState(FetchState.NOT_FOUND);
      }

      setFetchState(FetchState.LOADING);

      const axios = (await import('axios')).default;
      let reqUrl = `${API_URL}${ApiEndpoint.SUBSCRIPTION_REQUEST_VERIFY}`;
      reqUrl = reqUrl.replace(':id', id);

      await axios.post(reqUrl);

      setFetchState(FetchState.SUCCESS);
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setFetchState(FetchState.NOT_FOUND);
      } else {
        setFetchState(FetchState.ERROR);
      }
    }
  };

  return [fetchState, verifySubscription] as const;
}

export function useUnsubscribe() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const unsubscribe = async (email: string): Promise<boolean> => {
    try {
      setFetchState(FetchState.LOADING);

      const axios = (await import('axios')).default;
      let reqUrl = `${API_URL}${ApiEndpoint.SUBSCRIPTION}`;
      reqUrl = reqUrl.replace(':contact-mode', 'email');
      reqUrl = reqUrl.replace(':topic', 'japan-visa');
      reqUrl = `${reqUrl}?email=${encodeURIComponent(email)}`;

      await axios.delete(reqUrl);

      setFetchState(FetchState.SUCCESS);

      return true;
    } catch (err) {
      setFetchState(FetchState.ERROR);
      return false;
    }
  };

  return [fetchState, unsubscribe] as const;
}
