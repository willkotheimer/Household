import axios from 'axios';
import { baseUrl } from './config.json';

const choresURL = `${baseUrl}/Chores`;

const getChoresByHousehold = (id) => new Promise((resolve, reject) => {
    axios.get(`${choresURL}/household/${id}`).then((response) => {
        resolve(response.data);
    }).catch((error) => reject(error))
});

export default { getChoresByHousehold }