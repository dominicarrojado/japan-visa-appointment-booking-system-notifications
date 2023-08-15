import { useEffect, useState } from 'react';
import { checkIsLocalhost } from './location';
import { COOKIE_BANNER_IS_CLOSED_KEY } from './constants';

export function useIsCookieBannerClosed() {
  const [isCookieBannerClosed, setIsCookieBannerClosed] = useState(true);

  useEffect(() => {
    setIsCookieBannerClosed(
      checkIsLocalhost() ||
        localStorage.getItem(COOKIE_BANNER_IS_CLOSED_KEY) === '1'
    );
  }, []);

  return isCookieBannerClosed;
}
