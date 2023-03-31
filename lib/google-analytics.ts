import { PROJECT_TITLE } from './constants';
import { checkIsLocalhost } from './location';
import { EventSubscribeFormSubmit, EventUnsubscribeFormSubmit } from './types';

declare global {
  interface Window {
    dataLayer: Array<Record<string, any>>;
  }
}

export function trackEvent(
  data: EventSubscribeFormSubmit | EventUnsubscribeFormSubmit
) {
  if (checkIsLocalhost()) {
    return;
  }

  window.dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : [];
  window.dataLayer.push({
    ...data,
    projectTitle: PROJECT_TITLE,
  });
}
