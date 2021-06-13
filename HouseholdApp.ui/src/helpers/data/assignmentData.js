import axios from 'axios';
import { baseUrl } from '../config.json';

const assignmentsURL = `${baseUrl}/Assignments`;
const assignmentsChores = `${baseUrl}/AssignmentsChores`;
const assignmentChoresUserURL = `${baseUrl}/AssignmentsChoresUser`;

const getAssignmentsByHouseholdFromUserId = (id) => new Promise((resolve, reject) => {
  axios.get(`${assignmentChoresUserURL}/household/user/${id}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getAssignmentsByUserId = (id) => new Promise((resolve, reject) => axios.get(`${assignmentsURL}/user/${id}`).then((response) => resolve(response.data)).catch((error) => reject(error)));

const setAssignmentAsDone = (assignment) => new Promise((resolve, reject) => {
  console.warn(assignment);
  axios.patch(`${assignmentsURL}/done`, assignment).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getAssignmentsByHouseHoldId = (id) => new Promise((resolve, reject) => {
  axios.get(`${assignmentsChores}/household/${id}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});
const createAssignment = (assignment) => new Promise((resolve, reject) => {
  axios.post(`${assignmentsURL}`, assignment).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default {
  getAssignmentsByUserId,
  getAssignmentsByHouseHoldId,
  createAssignment,
  getAssignmentsByHouseholdFromUserId,
  setAssignmentAsDone,
};
