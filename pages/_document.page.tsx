import { Html, Head, Main, NextScript } from 'next/document';
import AdUnitScript from '@/components/adUnitScript';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <AdUnitScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
