import React from 'react';
import debounce from 'lodash/debounce';

const FILTER_SEARCH_DELAY = 300;

class EmployeeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
    };
  }

  onKeyDownHandler = e => {
    if (e.keyCode === 13) {
      this.props.onFilter(this.state);
    }
  };

  handleChange = debounce(e => {
    this.setState({ firstName: e }, () => {
      if (e.length > 2) {
        this.props.onFilter(this.state);
      } else if (e.length === 0) {
        this.props.onFilter({});
      }
    });
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
