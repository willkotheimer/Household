import axios from 'axios';
import firebase from 'firebase';
import { baseUrl } from '../config.json';

const imageURL = `${baseUrl}/Images`;

const getImages = () => new Promise((resolve, reject) => {
  axios.get(`${imageURL}`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

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
  console.warn(image);
  axios.post(`${imageURL}`, image).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const deleteFromFirebase = (url) => {
  const pictureRef = firebase.storage().refFromURL(url);
  pictureRef.delete()
    .catch((err) => {
      console.log(err);
    });
};

const deleteImage = (imageId, imagelink) => new Promise((resolve, reject) => {
  console.warn(`${imageURL}/${imageId}`);
  axios.delete(`${imageURL}/${imageId}`).then((response) => {
    deleteFromFirebase(imagelink);
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default {
  getImagesByChoreId,
  getMainImageByChoreId,
  addImage,
  deleteImage,
  getImages,
};
