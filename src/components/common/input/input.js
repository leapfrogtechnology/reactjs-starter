import moment from 'moment';
import classnames from 'classnames';
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import DropDown from 'components/common/dropDown';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.type === 'date' && this.props.initialValue ? moment(this.props.initialValue) : null,
      calendarFocused: false,
    };
  }
  onDateChange = (name, date) => {
    if (date && date._d) {
      const changedDate = new Date(date._d).toISOString();
      const [dateOnly] = changedDate.split('T');

      this.setState(() => ({ date }));

      this.props.onInputFieldChange(name, dateOnly);
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  render() {
    const { labelText, required, placeholder, error, disabled, type, id, name } = this.props;

    let inputView = (
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        className={classnames('lf-input', { [`lf-input--disabled`]: disabled }, { [`lf-input--error`]: error })}
        onChange={this.props.onChange}
        required={required ? true : false}
        disabled={disabled}
        onBlur={this.props.onBlur}
        defaultValue={this.props.initialValue}
      />
    );

    if (type && type === 'password') {
      inputView = (
        <input
          id={id}
          name={name}
          type="password"
          placeholder={placeholder}
          className={classnames('lf-input', { [`lf-input--disabled`]: disabled }, { [`lf-input--error`]: error })}
          onChange={this.props.onChange}
          required={required ? true : false}
          disabled={disabled}
          onBlur={this.props.onBlur}
          defaultValue={this.props.initialValue}
        />
      );
    }

    if (type && type === 'dropdown') {
      inputView = (
        <DropDown
          name={id}
          isSearchable={true}
          isDisabled={disabled}
          options={this.props.options}
          defaultValue={this.props.initialValue ? this.props.initialValue : 'Select...'}
          onChange={selectedOption =>
            this.props.onChange({ target: { name: name, value: selectedOption ? selectedOption.value : null } })
          }
        />
      );
    }

    if (type && type === 'date') {
      inputView = (
        <SingleDatePicker
          id={id}
          date={this.state.date}
          placeholder={placeholder}
          onDateChange={date => this.onDateChange(id, date)}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat={'MMM DD, YYYY'}
          hideKeyboardShortcutsPanel
          block
          openDirection={'up'}
          withPortal={true}
          noBorder={true}
          disabled={disabled}
        />
      );
    }

    return (
      <div className="lf-input-wrap">
        <label htmlFor={labelText} className="lf-input__label">
          {labelText}
          {required && <span className="lf-input__label--required"> * </span>}
        </label>
        {inputView}
        {error && <p className="lf-input__helper">{error}</p>}
      </div>
    );
  }
}

export default Input;
