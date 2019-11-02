import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getAllPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/positions.json?orderBy="machineId"&equalTo="${machineId}"`)
    .then((response) => {
      const demPositions = response.data;
      const positions = [];
      Object.keys(demPositions).forEach((fbId) => {
        demPositions[fbId].id = fbId;
        positions.push(demPositions[fbId]);
      });
      resolve(positions);
    })
    .catch((error) => reject(error));
});

export default { getAllPositionsByMachineId };
