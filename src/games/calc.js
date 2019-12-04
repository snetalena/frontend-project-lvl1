import startBrainGame from '..';
import { getQA, getRundomNumber } from '../utils';

const description = 'What is the result of the expression?';

const operations = {
  '+': (first, second) => first + second,
  '*': (first, second) => first * second,
  '-': (first, second) => first - second,
};

const operationsKeys = Object.keys(operations);

const getGameData = () => {
  const first = getRundomNumber(1, 100);
  const second = getRundomNumber(1, 100);

  const randomIndex = getRundomNumber(0, operationsKeys.length - 1);
  const randomOperation = operationsKeys[randomIndex];
  const correctAnswer = operations[randomOperation](first, second);
  const question = `${first} ${randomOperation} ${second}`;

  return getQA(question, correctAnswer);
};

const startCalcGame = () => startBrainGame(description, getGameData);
export default startCalcGame;
