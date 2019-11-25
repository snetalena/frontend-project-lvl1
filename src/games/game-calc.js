import { startBrainGame, getRundomNumber } from '..';
import { getPair } from '../util';

const description = 'What is the result of the expression?';

const opAdd = (first, second) => getPair(`${first} + ${second}`, first + second);
const opMult = (first, second) => getPair(`${first} * ${second}`, first * second);
const opSub = (first, second) => getPair(`${first} - ${second}`, first - second);

const operations = [opAdd, opMult, opSub];

const getGame = () => {
  const first = getRundomNumber(1, 100);
  const second = getRundomNumber(1, 100);
  const randomOpNum = getRundomNumber(0, operations.length - 1);
  return operations[randomOpNum](first, second);
};

const startCalcGame = () => startBrainGame(description, getGame);
export default startCalcGame;
