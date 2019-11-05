import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getSnackByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/snacks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const demSnacks = response.data;
      const snacks = [];
      Object.keys(demSnacks).forEach((fbId) => {
        demSnacks[fbId].id = fbId;
        snacks.push(demSnacks[fbId]);
      });
      resolve(snacks);
    })
    .catch((error) => reject(error));
});

export default { getSnackByUid };
