export enum Route {
  HOME = '/',
  SUBSCRIBE = '/subscribe',
  UNSUBSCRIBE = '/unsubscribe',
}

export enum InternalUrl {
  HOME = 'https://dominicarrojado.com',
}

export enum ExternalUrl {
  PERSONAL_PAYPAL = 'https://www.paypal.com/paypalme/DominicArrojado',
}

export enum ApiEndpoint {
  SUBSCRIPTION_REQUESTS = '/subscription-requests',
  SUBSCRIPTION_REQUEST_VERIFY = '/subscription-requests/:id/verify',
  SUBSCRIPTION = '/subscriptions/contact-mode/:contact-mode/topics/:topic',
}

export enum FetchState {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  NOT_FOUND = 'NOT_FOUND',
  ERROR = 'ERROR',
}

export enum GoogleAnalyticsEvent {
  SUBSCRIBE_FORM_SUBMIT = 'subscribe_form_submit',
  UNSUBSCRIBE_FORM_SUBMIT = 'unsubscribe_form_submit',
}

export enum GoogleAdSenseUnitSlot {
  PROJECT_HEADER = '2299922139',
  PROJECT_FOOTER = '3221836158',
}

export enum GoogleAdSenseUnitFormat {
  FLUID = 'fluid',
}

export type EventSubscribeFormSubmit = {
  event: GoogleAnalyticsEvent.SUBSCRIBE_FORM_SUBMIT;
  buttonText: string;
};

export type EventUnsubscribeFormSubmit = {
  event: GoogleAnalyticsEvent.UNSUBSCRIBE_FORM_SUBMIT;
  buttonText: string;
};
