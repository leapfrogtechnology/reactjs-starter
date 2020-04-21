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
export const interpolate = (str, params) => pinterpolate(str, params);
