import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';

const StyledSelect = styled.select``;

const StyledErrorMessage = styled.div``;

const StyledLabel = styled.label``;

/**
 * Generic Select component
 * @param {*} param0
 */
const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? <StyledErrorMessage>{meta.error}</StyledErrorMessage> : null}
    </>
  );
};

export default Select;
