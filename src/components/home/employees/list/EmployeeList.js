import moment from 'moment';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import * as routes from 'constants/routes';

import history from 'utils/history';
import * as alert from 'utils/alert';
import { handleError } from 'utils/errorHandler';

import * as employee from 'services/employee';

import Alert from 'components/common/alert';
import Table from 'components/common/table';
import EmployeeFilter from 'components/home/employees/EmployeeFilter';

// Custom Cell for Edit/Delete Functions
const ActionCell = ({ title, value, handleFunc }) => {
  return (
    <button
      style={{ margin: 4 }}
      onClick={() => {
        handleFunc(value);
      }}
    >
      {title}
    </button>
  );
};

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
  {
    Header: '',
    accessor: 'id',
    Cell: props => (
      <span>
        <ActionCell title="Edit" value={props.value} handleFunc={props.handleUpdate} />
        <ActionCell title="Delete" value={props.value} handleFunc={props.handleDelete} />
      </span>
    ),
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
    this.fetchEmployees({});
  }

  setLoading = loading => {
    this.setState({
      loading,
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

  redirectToEditPage = id => {
    history.push(`${routes.EMPLOYEES}/edit/${id}`);
  };

  handleDelete = id => {
    alert.warning({
      title: 'Are you sure?',
      text: `Do you really want to delete ${id}`,
      buttonText: 'Delete',
      preConfirm: async () => {
        try {
          let resp = await employee.deleteById(id);
          if (resp.status === 200) {
            alert.info({
              title: 'Deleted',
            });
            this.fetchEmployees();
          }
        } catch (err) {
          handleError(err);
        }
      },
    });
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
            <Table
              columns={columns}
              data={employees}
              handleUpdate={this.redirectToEditPage}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeList;
