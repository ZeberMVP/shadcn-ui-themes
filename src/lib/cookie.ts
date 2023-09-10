import Cookies from "js-cookie";

export function setCookie(
  key: string,
  value: string,
  options?: Cookies.CookieAttributes,
) {
  Cookies.set(key, value, options);
}

export function getCookie(key: string) {
  return Cookies.get(key);
}

export function removeCookie(key: string) {
  Cookies.remove(key);
}
