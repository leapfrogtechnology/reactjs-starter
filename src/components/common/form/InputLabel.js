import React from 'react';

/**
 * Component To Display Label based on options provided.
 *
 * @param {*} name
 * @param {*} isMandatory
 * @returns
 */
const InputLabel = (name, isMandatory) => {
  return (
    <label className="form-label dark--text">
      <span className="font-weight-bold">{name} </span>
      {isMandatory ? (
        <span className="font-weight-bold color-red">*</span>
      ) : (
        <span className="secondary-text">(optional)</span>
      )}
    </label>
  );
};

export default InputLabel;
