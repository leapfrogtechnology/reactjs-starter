/**
 * Generates react select options from given array of object.
 *
 * @param {Array} array
 * @param {Object} model Object keys from which react select's value and label is to fetched.
 * @returns {Array}
 */
export const generateReactSelectOptionsFromObject = (array, model = { value: 'id', label: 'name' }) =>
  array.map(item => ({ value: item[model.value], label: item[model.label] }));

/**
 * Generates react select options for given array of string.
 *
 * @param {Array} array
 * @returns {Array}
 */
export const generateReactSelectOptions = array => array.map(value => ({ value, label: value }));
