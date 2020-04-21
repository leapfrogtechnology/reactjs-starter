import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import InputLabel from './InputLabel';

const IconTextInput = props => {
  const {
    label,
    name,
    isMandatory,
    IconComponent,
    iconComponentClass,
    type,
    placeholderText,
    readOnly,
    value,
    error,
    handleChange,
    handleBlur,
    disabled,
  } = props;

  return (
    <div className="form-group" key={label + '-input'}>
      {InputLabel(label, isMandatory)}
      <div>
        <div className="d-inline-block">
          <label className="d-flex align-items-center form-elem dark--text padding--none">
            <span className="d-flex align-items-center margin--r padding height--full icon-label">
              <IconComponent fontSize={20} className={classnames({ [iconComponentClass]: iconComponentClass })} />
            </span>
            <input
              type={type || 'text'}
              name={name}
              value={value || ''}
              className="width--full"
              readOnly={readOnly}
              id={label + '-inputfield'}
              disabled={disabled}
              placeholder={placeholderText}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
        </div>
      </div>
      {error && <span className="color-red">{error}</span>}
    </div>
  );
};

IconTextInput.propTypes = {
  IconComponent: PropTypes.any,
  error: PropTypes.any,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  iconComponentClass: PropTypes.any,
  isMandatory: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  placeholderText: PropTypes.any,
  readOnly: PropTypes.any,
  type: PropTypes.any,
  value: PropTypes.any,
};

export default IconTextInput;
