import Link from 'next/link';
import React from 'react';
import { useUnsubscribe } from '@/lib/api-hooks';
import { trackEvent } from '@/lib/google-analytics';
import { FetchState, GoogleAnalyticsEvent, Route } from '@/lib/types';
import Button, { ButtonVariant } from './button';
import ButtonLink from './buttonLink';
import ButtonLoader from './buttonLoader';
import Form from './form';
import FormBody from './formBody';
import FormError from './formError';
import Input from './input';

export default function UnsubscribeForm() {
  const submitText = 'Proceed';
  const [fetchState, unsubscribe] = useUnsubscribe();
  const isLoading = fetchState === FetchState.LOADING;
  const formOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget as HTMLFormElement;

    unsubscribe(formEl.email.value);

    trackEvent({
      event: GoogleAnalyticsEvent.UNSUBSCRIBE_FORM_SUBMIT,
      buttonText: submitText,
    });
  };

  return (
    <Form onSubmit={formOnSubmit}>
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
              required
            />
            <p className="text-sm">
              By submitting this form, you will no longer receive email
              notifications when a slot becomes available.
            </p>
            {fetchState === FetchState.ERROR && (
              <FormError>
                Oops! Something went wrong. Please try again.
              </FormError>
            )}
            <Button type="submit" disabled={isLoading}>
              {isLoading && <ButtonLoader />}
              {submitText}
            </Button>
            <Link href={Route.HOME} passHref legacyBehavior>
              <ButtonLink variant={ButtonVariant.SECONDARY}>Go Home</ButtonLink>
            </Link>
          </>
        ) : (
          <p>
            You have been successfully unsubscribed from the Embassy of Japan in
            Singapore Visa Appointment Notification Service for Visa (Tourism)
            applications. I&apos;m sorry to see you go, but I appreciate your
            time and interest in this service. If you change your mind and would
            like to{' '}
            <Link href={Route.HOME} className="underline hover:text-black">
              resubscribe
            </Link>{' '}
            in the future, please don&apos;t hesitate to do so. Thank you!
          </p>
        )}
      </FormBody>
    </Form>
  );
}
