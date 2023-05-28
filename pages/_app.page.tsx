import Layout from '@/components/layout';
import SeoTags from '@/components/seoTags';
import TagManager from '@/components/tagManager';
import AdUnitScript from '@/components/adUnitScript';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoTags />
      <TagManager />
      <AdUnitScript />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
