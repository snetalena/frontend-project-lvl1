import startBrainGame from '..';
import { getPair, getRundomNumber } from '../util';

const description = 'What is the result of the expression?';

const operations = {
  '+': (first, second) => first + second,
  '*': (first, second) => first * second,
  '-': (first, second) => first - second,
};

const getGame = () => {
  const first = getRundomNumber(1, 100);
  const second = getRundomNumber(1, 100);

  const randomNumber = getRundomNumber(0, Object.keys(operations).length - 1);
  const randomOperation = Object.keys(operations)[randomNumber];
  const correctAnswer = operations[randomOperation](first, second);
  const question = `${first} ${randomOperation} ${second}`;

  return getPair(question, correctAnswer);
};

const startCalcGame = () => startBrainGame(description, getGame);
export default startCalcGame;
