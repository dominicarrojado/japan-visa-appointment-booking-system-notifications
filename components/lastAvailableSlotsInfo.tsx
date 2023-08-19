import React, { useEffect } from 'react';
import Alert from './alert';
import AlertSkeleton from './alertSkeleton';
import { useGetLastAvailableSlotsDate } from '@/lib/api-hooks';
import { FetchState } from '@/lib/types';

export default function LastAvailableSlotsInfo() {
  const [fetchState, lastAvailableSlotsDate, getLastAvailableSlotsDate] =
    useGetLastAvailableSlotsDate();

  useEffect(() => {
    getLastAvailableSlotsDate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetchState === FetchState.ERROR) {
    return null;
  }

  return (
    <Alert>
      {fetchState !== FetchState.SUCCESS ? (
        <AlertSkeleton />
      ) : (
        `Last available slots were spotted on ${lastAvailableSlotsDate}.`
      )}
    </Alert>
  );
}
