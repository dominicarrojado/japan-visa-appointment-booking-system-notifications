import Link from 'next/link';
import React, { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import ButtonLink from '@/components/buttonLink';
import PageSubtitle from '@/components/pageSubtitle';
import { useVerifySubscription } from '@/lib/api-hooks';
import { FetchState, Route } from '@/lib/types';

export default function Subscribe() {
  const [fetchState, verifySubscription] = useVerifySubscription();

  useEffect(() => {
    verifySubscription();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NextSeo noindex />
      {fetchState === FetchState.LOADING && (
        <>
          <PageSubtitle>Verifying subscription...</PageSubtitle>
          <p>
            Please wait while we verify your subscription. This process may take
            a few moments. Thank you for your patience and interest in this
            service.
          </p>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <PageSubtitle>Subscription confirmed</PageSubtitle>
          <p>
            You&apos;re now subscribed to the Embassy of Japan in Singapore Visa
            Appointment Notification Service for Visa (Tourism) applications.
            Get ready to receive updates when a slot becomes available.
          </p>
          <div>
            <Link href={Route.HOME} passHref legacyBehavior>
              <ButtonLink>Go Home</ButtonLink>
            </Link>
          </div>
        </>
      )}
      {fetchState === FetchState.NOT_FOUND && (
        <>
          <PageSubtitle>Token expired or not found</PageSubtitle>
          <p>
            Your confirmation token has expired or cannot be found. If you have
            not confirmed your subscription yet, please resubscribe to receive
            updates on new slots.
          </p>
          <div>
            <Link href={Route.HOME} passHref legacyBehavior>
              <ButtonLink>Go Home</ButtonLink>
            </Link>
          </div>
        </>
      )}
      {fetchState === FetchState.ERROR && (
        <>
          <PageSubtitle>Something went wrong</PageSubtitle>
          <p>
            Please try again later. If you continue to experience issues, please
            contact me and we&apos;ll do our best to assist you. Thank you for
            your patience and understanding.
          </p>
        </>
      )}
    </>
  );
}
