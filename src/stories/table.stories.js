import React from 'react';

import Table from '../components/common/table';

const columns = [
  {
    Header: 'SN.',
    maxWidth: 100,
    Cell: props => props.row.index + 1,
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Designation',
    accessor: 'designation',
  },
  {
    Header: 'Date of birth',
    accessor: 'dob',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
];

const employees = [
  {
    id: 1,
    firstName: 'Dutch',
    lastName: 'Van Der Linde',
    address: 'Rhotes',
    designation: 'SSE',
    dob: '2020-04-04',
  },
  {
    id: 2,
    firstName: 'Arthur',
    lastName: 'Morgan',
    address: 'Saint Denis',
    designation: 'SSE',
    dob: '2020-01-01',
  },
  {
    id: 3,
    firstName: 'Sadie',
    lastName: 'Adler',
    designation: 'Test',
    address: 'Emerald Ranch',
    dob: '2020-04-29',
  },
];

export const TableView = () => <Table columns={columns} data={employees} />;

export default {
  title: 'Table',
  component: TableView,
};
