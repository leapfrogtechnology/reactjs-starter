import config from '../config';
import http from 'utils/http';

/**
 * Fetch all employee
 */
export async function fetchEmployees() {
  const employees = await http.get(config.endpoints.employee);

  return employees;
}

/**
 * save an employee object
 * @param {*} employee
 */
export async function save(employee) {
  const response = await http.post(config.endpoints.employee, employee);
  return response.data;
}

/**
 *
 * @param {*} employee
 */
export async function update(employee) {
  const response = await http.put(`${config.endpoints.employee}/${employee.id}`, employee);
  return response.data;
}

/**
 *
 * @param {*} id
 */
export async function fetchById(id) {
  const response = await http.get(`${config.endpoints.employee}/${id}`);
  return response.data;
}
