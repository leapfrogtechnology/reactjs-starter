import config from '../config';
import http from 'utils/http';

/**
 * Fetch all employee
 */
export async function fetchEmployees() {
    const { employees } = await http.get(
      config.endpoints.employee
    );
    return employees;
}


/**
 * save an employee object
 * @param {*} employee 
 */
export async function save(employee) {
  const { response } = await http.post(config.endpoints.employee, {
    firstName: employee.firstName,
    lastName: employee.lastName,
    designation: employee.designation,
    dob: employee.dob,
    address: employee.dob
  });
  return response;
}
  