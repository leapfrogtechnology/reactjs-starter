import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from './InputLabel';

import { MdClear } from 'react-icons/md';

const RadioButton = props => {
  const { label, name, isMandatory, selectedValue, selectOptions, error, handleChange, canReset, disabled } = props;

  const handleOnChange = event =>
    handleChange({
      target: {
        name,
        value: event.target.value,
      },
    });

  const handleReset = event => {
    handleChange({
      target: {
        name,
        value: null,
      },
    });
  };

  return (
    <div className="form-group" key={label + '-input'}>
      {InputLabel(label, isMandatory)}
      <div className="d-flex align-items-center flex-row margin--b flex-wrap">
        {selectOptions &&
          selectOptions.map(option => {
            return (
              <label
                key={option.value}
                className="d-flex align-items-center margin--r margin--b padding radio-container grey--text"
              >
                <input
                  type="radio"
                  value={option.value}
                  name={name}
                  className="margin--r radio-button"
                  // eslint-disable-next-line eqeqeq
                  checked={selectedValue == option.value}
                  onChange={handleOnChange}
                  disabled={disabled}
                />
                {option.label}
              </label>
            );
          })}
        {canReset && (
          <button type="button" className="clear-button d-flex align-items-center" onClick={handleReset}>
            <MdClear />
            Clear
          </button>
        )}
      </div>
      {error && <span className="color-red">{error}</span>}
    </div>
  );
};

RadioButton.propTypes = {
  error: PropTypes.any,
  handleChange: PropTypes.any,
  isDisabled: PropTypes.any,
  isMandatory: PropTypes.any,
  label: PropTypes.any,
  name: PropTypes.any,
  selectOptions: PropTypes.any,
  selectedValue: PropTypes.any,
};

export default RadioButton;
