import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

/**
 * A select form component.
 * A selector component which is an abstraction overt React Select.
 *
 * @component
 * @example
 * return (
 *  <Selector
 *   lists = the lists of data for the option
 *   selected = the pre-selected item from the list
 *   onChange = method invoked on selecting the item from the list.
 *  />
 * )
 *
 * @param  props
 */
const Selector = props => {
  return <Select options={props.lists} value={props.selected} onChange={props.onChange} />;
};

Selector.propTypes = {
  /**
   * The list of options for the selector.
   */
  lists: PropTypes.array,

  /**
   * The selected item from the list of items.
   */
  selected: PropTypes.object,
  /**
   * The handler method invoked when selecting the item from the list of items.
   */
  onChange: PropTypes.func,
};

export default Selector;
