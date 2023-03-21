import Layout from '@/components/layout';
import SeoTags from '@/components/seoTags';
import TagManager from '@/components/tagManager';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoTags />
      <TagManager />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
