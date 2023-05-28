import React, { useEffect } from 'react';
import cn from 'classnames';
import { displayAd } from '../lib/google-adsense';
import { GoogleAdSenseUnitFormat, GoogleAdSenseUnitSlot } from '../lib/types';
import { GOOGLE_ADSENSE_CLIENT_ID } from '../lib/constants';
import styles from './adUnit.module.css';

export type Props = {
  adSlot: GoogleAdSenseUnitSlot;
  adFormat: GoogleAdSenseUnitFormat;
  className?: string;
};

function AdUnit({ adSlot, adFormat, className }: Props) {
  useEffect(() => {
    displayAd();
  }, []);

  return (
    <div>
      <ins
        className={cn(
          'adsbygoogle block max-w-xl mx-auto',
          className,
          styles.adunit
        )}
        data-ad-client={GOOGLE_ADSENSE_CLIENT_ID}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
        data-testid="ad-unit"
      />
    </div>
  );
}

export default React.memo(AdUnit);
