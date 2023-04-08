import { checkIsLocalhost } from './location';

declare global {
  interface Window {
    adsbygoogle?: Array<{}>;
  }
}

export function displayAd() {
  try {
    if (checkIsLocalhost()) {
      return;
    }

    window.adsbygoogle = Array.isArray(window.adsbygoogle)
      ? window.adsbygoogle
      : [];
    window.adsbygoogle.push({});
  } catch (err) {
    console.error('Error on displaying Google AdSense unit', err);
  }
}
