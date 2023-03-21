import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import {
  MAIN_DESC,
  MAIN_ORIGIN,
  MAIN_TITLE,
  MAIN_URL,
  SITE_NAME,
} from '../lib/constants';

export default function SeoTags() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#004151" />
        <link rel="icon" href={`${MAIN_ORIGIN}/favicon.ico`} />
        <link rel="manifest" href={`${MAIN_ORIGIN}/manifest.json`} />
      </Head>
      <DefaultSeo
        title={MAIN_TITLE}
        description={MAIN_DESC}
        canonical={MAIN_URL}
        openGraph={{
          url: MAIN_URL,
          title: MAIN_TITLE,
          description: MAIN_DESC,
          type: 'website',
          site_name: SITE_NAME,
        }}
      />
    </>
  );
}
