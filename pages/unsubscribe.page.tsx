import { NextSeo } from 'next-seo';
import UnsubscribeForm from '@/components/unsubscribeForm';
import { getMetaTitle, getRouteCanonical } from '@/lib/meta';
import { Route } from '@/lib/types';

export default function Unsubscribe() {
  const metaUrl = getRouteCanonical(Route.UNSUBSCRIBE);
  const metaTitle = getMetaTitle('Unsubscribe');

  return (
    <>
      <NextSeo
        canonical={metaUrl}
        title={metaTitle}
        openGraph={{ url: metaUrl }}
      />
      <p>
        To unsubscribe from this service, please enter your email in the form
        below and confirm. Thank you for your interest in my content.
      </p>
      <UnsubscribeForm />
    </>
  );
}
