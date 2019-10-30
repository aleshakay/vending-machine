import 'bootstrap';
import firebase from 'firebase';
import apiKeys from './helpers/apiKeys';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys, 'firebaseKeys');
  console.error('hi', apiKeys, 'firebaseKeys');
};

init();
