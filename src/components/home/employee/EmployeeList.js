import moment from 'moment';
import React, { Component } from 'react';

import Table from 'components/common/table';

import history from 'utils/history';
import * as routes from 'constants/routes';
import { interpolate } from 'utils/string';
import { handleError } from 'utils/errorHandler';

const columns = [
  {
    Header: 'SN.',
    accessor: 'sn',
    maxWidth: 100,
    Cell: props => <span>{props.index + 1}</span>,
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: props => <span>{props.original.status}</span>,
  },
  {
    Header: 'Project',
    accessor: 'project',
  },
  {
    Header: 'Period',
    accessor: 'period',
  },
  {
    Header: 'Deadline',
    accessor: 'deadline',
    Cell: props => <span>{moment(props.value).format('LL')}</span>,
  },
  {
    Header: 'Appraiser',
    accessor: 'appraiser',
  },
  {
    Header: 'Co-Appraiser',
    accessor: 'coAppraiser',
  },
  {
    Header: 'Mediator',
    accessor: 'mediator',
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

  fetchEmployees = params => {
    try {
      //TODO:  Needs to replace from an API fetch.
      const employees = [
        {
          status: 'self evaluation',
          project: 'delphi',
          period: 'Dec 2019 to july 2020',
          deadline: '30 july,2020',
          appraiser: 'Kailash Raj Bijayananda',
          coAppraiser: 'Mamita Shrestha',
          mediator: 'Kailash Raj Bijayananda',
        },
        {
          status: 'self evaluation',
          project: 'delphi',
          period: 'Dec 2019 to july 2020',
          deadline: '30 july,2020',
          appraiser: 'Kailash Raj Bijayananda',
          coAppraiser: 'Mamita Shrestha',
          mediator: 'Kailash Raj Bijayananda',
        },
        {
          status: 'self evaluation',
          project: 'delphi',
          period: 'Dec 2019 to july 2020',
          deadline: '30 july,2020',
          appraiser: 'Kailash Raj Bijayananda',
          coAppraiser: 'Mamita Shrestha',
          mediator: 'Kailash Raj Bijayananda',
        },
      ];

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
          showPagination={false}
          minRows={3}
          columns={columns}
          data={employees}
          loading={loading}
          getTrProps={(state, rowInfo) => {
            return {
              onClick: e => {
                //TODO: click implementation details
              },
            };
          }}
        />
      </div>
    );
  }
}

export default EmployeeList;
