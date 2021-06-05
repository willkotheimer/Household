import axios from 'axios';
import { baseUrl } from './config.json';

const householdURL = `${baseUrl}/HouseholdUser`;

const getUsersHousehold = (uID) => new Promise((resolve, reject) => {
    axios.get(`${householdURL}/${uID}`).then((response) => {
        resolve(response.data);
    }).catch((error) => reject(error))
});

export default { getUsersHousehold }