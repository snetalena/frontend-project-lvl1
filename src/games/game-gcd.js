import { startBrainGame, getRundomNumber } from '..';
import { getPair } from '../util';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (maxNum, minNum) => {
  if (minNum === 0) {
    return Math.abs(maxNum);
  }
  return getGCD(minNum, maxNum % minNum);
};

const getGame = () => {
  const first = getRundomNumber(1, 100);
  const second = getRundomNumber(1, 100);
  const question = `${first} ${second}`;
  const correctAnswer = getGCD(Math.min(first, second), Math.max(first, second));

  return getPair(question, correctAnswer);
};

const startGCDGame = () => startBrainGame(description, getGame);
export default startGCDGame;
