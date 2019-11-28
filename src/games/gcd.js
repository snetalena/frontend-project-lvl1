import startBrainGame from '..';
import { getPair, getRundomNumber } from '../util';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (first, second) => {
  const minNum = Math.min(first, second);
  const maxNum = Math.min(first, second);
  if (minNum === 0) {
    return Math.abs(maxNum);
  }
  return getGCD(minNum, maxNum % minNum);
};

const getGame = () => {
  const first = getRundomNumber(1, 100);
  const second = getRundomNumber(1, 100);
  const question = `${first} ${second}`;
  const correctAnswer = getGCD(first, second);

  return getPair(question, correctAnswer);
};

const startGCDGame = () => startBrainGame(description, getGame);
export default startGCDGame;
