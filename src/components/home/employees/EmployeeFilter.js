import React, { Component } from 'react';
import debounce from 'lodash/debounce';

const FILTER_SEARCH_DELAY = 300;
const keys = {
  ENTER: 13,
};

class EmployeeFilter extends Component {
  onKeyDownHandler = e => {
    if (e.keyCode === keys.ENTER) {
      this.props.onFilter({ firstName: e.target.value });
    }
  };

  handleChange = debounce(value => {
    if (value.length > 2) {
      this.props.onFilter({ firstName: value });
    } else if (value.length === 0) {
      this.props.onFilter();
    }
  }, FILTER_SEARCH_DELAY);

  render() {
    return (
      <div className="container">
        <input
          style={{
            width: '100%',
            padding: '4px',
            marginBottom: '10px',
          }}
          type="text"
          placeholder="Search Employees by FirstName"
          onChange={e => this.handleChange(e.target.value)}
          onKeyDown={this.onKeyDownHandler}
        />
      </div>
    );
  }
}

export default EmployeeFilter;
