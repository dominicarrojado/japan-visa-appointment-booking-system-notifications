import React, { useEffect } from 'react';
import Alert from './alert';
import { useGetLastAvailableSlotsDate } from '@/lib/api-hooks';

export default function LastAvailableSlotsInfo() {
  const [lastAvailableSlotsDate, getLastAvailableSlotsDate] =
    useGetLastAvailableSlotsDate();

  useEffect(() => {
    getLastAvailableSlotsDate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Alert>
      Last available slots were spotted on {lastAvailableSlotsDate}.
    </Alert>
  );
}
