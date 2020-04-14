import makeData from './makeData';
import React, { Component } from 'react';
import Table from 'components/table/Table';
import { handleError } from 'utils/errorHandler';

const columns = [
  {
    Header: 'First name',
    accessor: 'firstName',
  },
  {
    Header: 'Last name',
    accessor: 'lastName',
  },
];

/**
 *
 * Sample component to list employee
 *
 */
class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchEmployees(params);
  }

  setLoading = loading => {
    this.setState({
      loading,
    });
  };

  fetchEmployees = () => {
    try {
      //TODO:  Needs to replace from an API fetch.
      const employees = makeData(100);

      this.setState({ employees: employees, loading: false });
    } catch (err) {
      this.setLoading(false);
      handleError(err);
    }
  };

  render() {
    const { employees, loading } = this.state;

    return (
      <div className="full-scope-card__content">
        <Table
          data={employees}
          columns={columns}
          loading={loading}
          showPagination={false}
          minRows={employees.length}
          getTrProps={employees}
        />
      </div>
    );
  }
}

export default EmployeeList;
