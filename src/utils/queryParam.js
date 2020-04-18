import qs from 'qs';

/**
 * Parse query params from url string.
 *
 * @example
 * parse('foo=bar&goo=car&hoo=dar')
 * => {foo: 'bar', goo: 'car', hoo: 'dar'}
 *
 * @param {string} value
 * @returns {object}
 */
export function parse(value) {
  return qs.parse(value.replace('?', ''));
}

/**
 * Stringify to url with query params.
 *
 * @example
 * stringify('link', { foo: 'bar', goo: 'car', hoo: 'dar' })
 * => 'link?foo=bar&goo=car&hoo=bar'
 *
 * @param {object} value
 * @returns {string}
 */
export function stringify(route, params) {
  if (params === null || !(params instanceof Object) || Object.keys(params).length < 1) {
    return route;
  }

  return route + '?' + qs.stringify(params);
}
