import smash from '../../helpers/data/smash';
import './machine.scss';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((singleMachine) => console.log('1 machine', singleMachine))
    .catch((error) => console.error(error));
// get machine returns first machine (hard coding)
// use machine id to get all position for that machine
// use machine id to get all snack positions
// use the uid of snack position or position to get snacks for that machine
// smash em - return an array of positions in order(A1, A2) so positions should have position.snack if a snack exist at that position.
};

export default { buildTheMachine };
