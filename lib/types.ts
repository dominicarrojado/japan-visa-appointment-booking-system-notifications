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
