import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getMachine = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/machines.json`)
    .then((response) => {
      const demMachines = response.data;
      const machines = [];
      Object.keys(demMachines).forEach((fbId) => {
        demMachines[fbId].id = fbId;
        machines.push(demMachines[fbId]);
      });
      console.log(machines);
      resolve(machines[0]);
    })
    .catch((error) => reject(error));
});

export default { getMachine };
