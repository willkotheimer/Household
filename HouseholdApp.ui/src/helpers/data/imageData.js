import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';
import config, { baseUrl } from '../config.json';

const app = initializeApp(config.firebaseConfig);

const auth = getAuth(app); // Initialize Firebase auth
const userDataUrl = `${baseUrl}/Users`;

const getUid = () => onAuthStateChanged(auth, (user) => {
  if (user) {
    return user.uid;
  }
  return console.warn('no user logged in.');
});

const loginClickEvent = (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((cred) => {
    const user = cred.additionalUserInfo.profile;
    if (cred.additionalUserInfo.isNewUser) {
      const userObj = {
        FirebaseKey: cred.user.uid,
        FirstName: user.given_name,
        LastName: user.family_name,
        Email: user.email,
      };
      axios.post(`${userDataUrl}`, userObj);
    }
  });
};

const logoutClickEvent = (e) => {
  e.preventDefault();
  window.sessionStorage.removeItem('token');
  signOut(auth);
  window.location.href = '/';
};

export default { getUid, loginClickEvent, logoutClickEvent };
