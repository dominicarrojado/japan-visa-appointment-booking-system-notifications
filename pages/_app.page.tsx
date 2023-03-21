import Layout from '@/components/layout';
import SeoTags from '@/components/seoTags';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoTags />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
