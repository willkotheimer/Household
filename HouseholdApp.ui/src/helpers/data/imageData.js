import axios from 'axios';
import { baseUrl } from '../config.json';

const imageURL = `${baseUrl}/Images`;

const getImagesByChoreId = (choreId) => new Promise((resolve, reject) => {
  axios.get(`${imageURL}/${choreId}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const getMainImageByChoreId = () => new Promise((resolve, reject) => {
  axios.get(`${imageURL}/oneperchore`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const addImage = (image) => new Promise((resolve, reject) => {
  console.warn('diuhdauah', image);
  axios.post(`${imageURL}`, image).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default { getImagesByChoreId, getMainImageByChoreId, addImage };
