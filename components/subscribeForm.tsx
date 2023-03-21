import Link from 'next/link';
import React, { useState } from 'react';
import { useSubmitSubscribeRequest } from '@/lib/api-hooks';
import { FetchState, Route } from '@/lib/types';
import Button from './button';
import ButtonLoader from './buttonLoader';
import Form from './form';
import FormBody from './formBody';
import FormError from './formError';
import Input from './input';

export default function SubscribeForm() {
  const [fetchState, submitSubscriptionRequest] = useSubmitSubscribeRequest();
  const [submittedEmail, setSubmittedEmail] = useState('');
  const isLoading = fetchState === FetchState.LOADING;
  const formOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.target as HTMLFormElement;
    const email = formEl.email.value;

    submitSubscriptionRequest(email);
    setSubmittedEmail(email);
  };

  return (
    <Form className="sticky bottom-6" onSubmit={formOnSubmit}>
      <FormBody>
        {fetchState !== FetchState.SUCCESS ? (
          <>
            <Input
              label="Email Address"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              disabled={isLoading}
            />
            <p className="text-sm text-gray-400">
              By submitting this form, you agree to receive these email
              notifications and understand that you can{' '}
              <Link
                href={Route.UNSUBSCRIBE}
                className="underline hover:text-gray-700"
              >
                unsubscribe
              </Link>{' '}
              at any time.
            </p>
            {fetchState === FetchState.ERROR && (
              <FormError>
                Oops! Something went wrong. Please try again.
              </FormError>
            )}
            <div>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <ButtonLoader />}
                Subscribe Now
              </Button>
            </div>
          </>
        ) : (
          <p>
            You&apos;re one step closer to subscribing with{' '}
            <strong>{submittedEmail}</strong>! Please check your email to verify
            and get notified when a slot becomes available.
          </p>
        )}
      </FormBody>
    </Form>
  );
}
