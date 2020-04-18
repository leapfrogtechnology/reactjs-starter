import pinterpolate from 'pinterpolate';

/**
 * Build supplied string by interpolating properties after delimiter(':') with the given parameters.
 *
 * @example
 * interpolate('/posts/:id', {id: 1})
 * => '/posts/1'
 *
 * @param {string} str
 * @param {object} params
 * @returns {string}
 */
export function interpolate(str, params) {
  return pinterpolate(str, params);
}
