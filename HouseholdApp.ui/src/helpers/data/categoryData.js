import axios from 'axios';
import { baseUrl } from '../config.json';

const categoriesURL = `${baseUrl}/Categories`;

const getAllCategories = (id) => new Promise((resolve, reject) => {
  axios.get(`${categoriesURL}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default { getAllCategories };
