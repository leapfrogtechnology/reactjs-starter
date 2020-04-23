import Cookies from 'universal-cookie';

const cookies = new Cookies();

/**
 * Get cookie.
 *
 * @param {string} key
 * @returns {string}
 */
export function get(key) {
  return cookies.get(key);
}

/**
 * Set cookie.
 *
 * @param {string} key
 * @param {string} value
 * @retunrs {string}
 */
export function set(key, value) {
  cookies.set(key, value, {
    path: '/',
  });
}

/**
 * Remove key value pair in storage.
 *
 * @param {string} key
 */
export function remove(key) {
  cookies.remove(key);
}
