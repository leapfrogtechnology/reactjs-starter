import moment from 'moment';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import * as routes from 'constants/routes';

import { handleError } from 'utils/errorHandler';

import * as employee from 'services/employee';

import Table from 'components/common/table';

const columns = [
  {
    Header: 'SN.',
    maxWidth: 100,
    Cell: props => {
      return <span>{props.row.index + 1}</span>;
    },
  },
  {
    Header: 'FirstName',
    accessor: 'firstName',
  },
  {
    Header: 'LastName',
    accessor: 'lastName',
  },
  {
    Header: 'Designation',
    accessor: 'designation',
  },
  {
    Header: 'Date of birth',
    accessor: 'dob',
    Cell: props => <span>{moment(props.value).format('LL')}</span>,
  },
  {
    Header: 'Address',
    accessor: 'address',
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
    this.fetchEmployees();
  }

  setLoading = loading => {
    this.setState({
      loading,
    });
  };

  fetchEmployees = async () => {
    try {
      this.setLoading(true);
      const employees = await employee.fetchEmployees();

      this.setState({ employees: employees.data });
      this.setLoading(false);
    } catch (err) {
      this.setLoading(false);
      handleError(err);
    }
  };

  render() {
    const { employees, loading } = this.state;

    return (
      <div className="cotent-wrap">
        <div className="container">
          <div className="title-bar mb-5x"></div>
          <div className="card card--elevated">
            <div className="title-bar__contents">
              <div className="title-bar__left">
                <h4 className="title-bar__title">Employee List</h4>
              </div>
              <div className="title-bar__right">
                <Link to={routes.EMPLOYEES_ADD} className="btn btn--blue">
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mb-5x"></div>
          <div className="full-scope-card__content">
            <Table columns={columns} data={employees} />
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
