import React, { useEffect } from 'react';
import cn from 'classnames';
import Alert from './alert';
import { useGetLastAvailableSlotsDate } from '@/lib/api-hooks';
import { FetchState } from '@/lib/types';

export default function LastAvailableSlotsInfo() {
  const [fetchState, lastAvailableSlotsDate, getLastAvailableSlotsDate] =
    useGetLastAvailableSlotsDate();

  useEffect(() => {
    getLastAvailableSlotsDate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return fetchState !== FetchState.ERROR ? (
    <Alert>
      <div
        className={cn(
          'transition-opacity duration-300',
          fetchState !== FetchState.SUCCESS ? 'opacity-0' : 'opacity-100'
        )}
      >
        Last available slots were spotted on {lastAvailableSlotsDate}.
      </div>
    </Alert>
  ) : null;
}
