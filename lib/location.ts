export function getSearchParams(name: string) {
  const { searchParams } = new URL(window.location.href);

  return searchParams.get(name);
}

export function checkIsLocalhost() {
  return window.location.hostname === 'localhost';
}
