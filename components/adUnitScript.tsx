import Script from 'next/script';
import React from 'react';
import { GOOGLE_ADSENSE_CLIENT_ID } from '../lib/constants';

function AdUnitScript() {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
    />
  );
}

export default React.memo(AdUnitScript);
