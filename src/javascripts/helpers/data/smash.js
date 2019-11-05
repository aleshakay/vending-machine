import machineData from './machineData';
import poistionData from './positionData';
import snackPositionData from './snackPositionData';
import snackData from './snackData';


const getCompleteMachine = () => new Promise((resolve, reject) => {
  machineData.getMachine()
    .then((singleMachine) => poistionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          snackData.getSnackByUid(positions[0].uid).then((snacks) => {
            const newPositions = [];
            positions.forEach((position) => {
              const newP = { ...position };
              const getSnackPosition = snackPositions.find((x) => x.positionId === newP.id);
              if (getSnackPosition) {
                const snack = snacks.find((x) => x.id === getSnackPosition.snackId);
                newP.snack = snack;
              } else {
                newP.snack = {};
              }
              newPositions.push(newP);
            });
            resolve(newPositions);
          });
        });
    })
    .catch((error) => reject(error));
// get machine returns first machine (hard coding)
// use machine id to get all position for that machine
// use machine id to get all snack positions
// use the uid of snack position or position to get snacks for that machine
// smash em - return an array of positions in order(A1, A2) so positions should have position.snack if a snack exist at that position.
});

const getSnacksWithPositions = (uid) => new Promise((resolve, reject) => {
  machineData.getMachine()
    .then((singleMachine) => poistionData.getAllPositionsByMachineId(singleMachine.id))
    .then((positions) => {
      snackPositionData.getAllSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          snackData.getSnackByUid(uid).then((snacks) => {
            const newSnacks = [];
            snacks.forEach((snack) => {
              const newSnack = { ...snack };
              const getSnackPosition = snackPositions.find((x) => x.snackId === newSnack.id);
              if (getSnackPosition) {
                const getPosition = positions.find((x) => x.id === getSnackPosition.positionId);
                newSnack.position = getPosition;
              } else {
                newSnack.position = {};
              }
              newSnacks.push(newSnack);
            });
            resolve(newSnacks);
          });
        });
    })
    .catch((error) => reject(error));
// get machine returns first machine (hard coding)
// use machine id to get all position for that machine
// use machine id to get all snack positions
// use the uid of snack position or position to get snacks for that machine
// smash em - return an array of positions in order(A1, A2) so positions should have position.snack if a snack exist at that position.
});


export default { getCompleteMachine, getSnacksWithPositions };
