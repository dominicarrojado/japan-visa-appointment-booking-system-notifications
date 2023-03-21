import { Route } from './types';
import { MAIN_ORIGIN, MAIN_TITLE, MAIN_URL } from './constants';

export function getMetaTitle(title: string) {
  return `${title} | ${MAIN_TITLE}`;
}

export function getRouteCanonical(route: Exclude<Route, Route.HOME>) {
  return `${MAIN_URL}${route.substring(1)}/`;
}
