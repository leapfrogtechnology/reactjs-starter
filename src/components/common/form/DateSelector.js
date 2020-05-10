import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import { FiCalendar } from 'react-icons/fi';

import InputLabel from './InputLabel';
import { REACT_DATEPICKER_DATE_FORMAT } from '../../../constants/appConstants';

const DateSelector = props => {
  const { label, name, isMandatory, placeholderText, value, error, handleChange, disabled } = props;

  const handleOnChange = selectedDate =>
    handleChange({
      target: {
        name: name,
        value: moment(selectedDate).format('YYYY-MM-DD'),
      },
    });

  return (
    <div className="form-group" key={label + '-input'}>
      {InputLabel(label, isMandatory)}
      <div>
        <div className={classnames('d-inline-block', { 'bg-color-grey': disabled })}>
          <label className="d-flex align-items-center form-elem dark--text padding--none">
            <span className="d-flex align-items-center margin--r padding height--full icon-label">
              <FiCalendar fontSize={20} />
            </span>
            <DatePicker
              onChange={handleOnChange}
              placeholderText={placeholderText}
              showMonthDropdown={true}
              showYearDropdown={true}
              disabled={disabled}
              selected={value ? new Date(value) : null}
              dateFormat={REACT_DATEPICKER_DATE_FORMAT}
            />
          </label>
        </div>
      </div>
      {error && <span className="color-red">{error}</span>}
    </div>
  );
};

DateSelector.propTypes = {
  error: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  isMandatory: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholderText: PropTypes.any.isRequired,
  value: PropTypes.any,
};

export default DateSelector;
