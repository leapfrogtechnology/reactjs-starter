import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import InputLabel from './InputLabel';

const FormGroup = props => {
  const {
    name,
    type,
    label,
    isMandatory,
    error,
    value,
    placeholder,
    readOnly,
    handleChange,
    handleBlur,
    containerClass,
    disabled,
  } = props;

  return (
    <div className={classnames('form-group', { [containerClass]: containerClass })} key={label + '-txtinput'}>
      {label && InputLabel(label, isMandatory)}

      <input
        type={type || 'text'}
        className={classnames('form-elem', { 'bg-grey': readOnly, 'border-red': error })}
        name={name}
        value={value || ''}
        readOnly={readOnly}
        id={label + '-inputfield'}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <span className="color-red">{error}</span>}
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  containerClass: PropTypes.string,
};

export default FormGroup;
