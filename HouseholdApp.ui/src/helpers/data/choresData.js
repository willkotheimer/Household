import axios from 'axios';
import { baseUrl } from '../config.json';

const choresURL = `${baseUrl}/Chores`;

const getChoresByHousehold = (id) => new Promise((resolve, reject) => {
  axios.get(`${choresURL}/household/${id}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getUnassignedChoresByWeekAndHouseHold = (week, householdId) => new Promise((resolve, reject) => {
  axios.get(`${choresURL}/household/${householdId}/${week}/unassigned`).then((response) => {
    // console.warn(response.data);
    resolve(response.data);
  });
});

const GetChoreById = (choreId) => new Promise((resolve, reject) => {
  axios.get(`${choresURL}/${choreId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const addChore = (chore) => new Promise((resolve, reject) => {
  console.warn(chore);
  axios.post(`${choresURL}`, chore).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const updateChore = (chore) => new Promise((resolve, reject) => {
  axios.patch(`${choresURL}`, chore).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default {
  getChoresByHousehold,
  addChore,
  updateChore,
  GetChoreById,
  getUnassignedChoresByWeekAndHouseHold,
};
