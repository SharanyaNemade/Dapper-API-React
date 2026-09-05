import axios from "axios";

//const API_URL = "https://localhost:7266/api/Employee";

//const API_URL = "http://localhost:8080/api/Employee";

//const API_URL = "http://192.168.1.10:8080/api/Employee";

const API_URL = "http://192.168.1.9:8080/api/Employee";


//  GET ALL

export const getEmployees = () => {
  return axios.get(API_URL);
};

//  GET BY ID

export const getEmployeeById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

//  ADD EMPLOYEE

export const addEmployee = (employee) => {
  return axios.post(API_URL, employee);
};

//  UPDATE EMPLOYEE

export const updateEmployee = (employee) => {
  return axios.put(`${API_URL}/${employee.employeeId}`, employee);
};



//  DELETE EMPLOYEE

export const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
