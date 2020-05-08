import moment from 'moment';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import * as routes from 'constants/routes';
import { ASC, DESC } from 'constants/options';

import { handleError } from 'utils/errorHandler';

import * as employee from 'services/employee';

import EmployeeFilter from '../EmployeeFilter';
import { Table, TableHeader } from 'components/common/table';

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
      sortOptions: {
        column: 'firstName',
        order: ASC,
      },
    };
  }

  columns = [
    {
      Header: 'SN.',
      maxWidth: 100,
      Cell: props => {
        return <span>{props.row.index + 1}</span>;
      },
    },
    {
      Header: () => (
        <TableHeader
          sortOptions={this.state.sortOptions}
          id="firstName"
          headerValue="First Name"
          onClick={this.setSortOptions}
        />
      ),
      accessor: 'firstName',
    },
    {
      Header: () => (
        <TableHeader
          sortOptions={this.state.sortOptions}
          id="lastName"
          headerValue="Last Name"
          onClick={this.setSortOptions}
        />
      ),
      accessor: 'lastName',
    },
    {
      Header: () => (
        <TableHeader
          sortOptions={this.state.sortOptions}
          id="designation"
          headerValue="Designation"
          onClick={this.setSortOptions}
        />
      ),
      accessor: 'designation',
    },
    {
      Header: () => (
        <TableHeader
          sortOptions={this.state.sortOptions}
          id="dob"
          headerValue="Date of Birth"
          onClick={this.setSortOptions}
        />
      ),
      accessor: 'dob',
      Cell: props => <span>{moment(props.value).format('LL')}</span>,
    },
    {
      Header: () => (
        <TableHeader
          sortOptions={this.state.sortOptions}
          id="address"
          headerValue="Address"
          onClick={this.setSortOptions}
        />
      ),
      accessor: 'address',
    },
  ];

  componentDidMount() {
    this.fetchEmployees(this.state.sortOptions);
  }

  setLoading = loading => {
    this.setState({
      loading,
    });
  };

  setSortOptions = id => {
    if (this.state.sortOptions.column === id) {
      let toggledOrder = this.state.sortOptions.order === ASC ? DESC : ASC;
      this.setState({ sortOptions: { ...this.state.sortOptions, order: toggledOrder } }, () => {
        this.fetchEmployees(this.state.sortOptions);
      });
    } else
      this.setState({ sortOptions: { column: id, order: ASC } }, () => {
        this.fetchEmployees(this.state.sortOptions);
      });
  };

  fetchEmployees = async options => {
    try {
      this.setLoading(true);
      const employees = await employee.fetchEmployees(options);

      this.setState({ employees: employees.data });
      this.setLoading(false);
    } catch (err) {
      this.setLoading(false);
      handleError(err);
    }
  };

  render() {
    const { employees } = this.state;

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
            <EmployeeFilter onFilter={this.fetchEmployees} />
            <Table columns={this.columns} data={employees} />
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
