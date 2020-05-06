import debounce from 'lodash/debounce';
import React, { Component } from 'react';

import * as keys from '../../../constants/keys';

const SEARCH_DELAY = 300;

class EmployeeFilter extends Component {
  onKeyDown = e => {
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
  }, SEARCH_DELAY);

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
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

export default EmployeeFilter;
