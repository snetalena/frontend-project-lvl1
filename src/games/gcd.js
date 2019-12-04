import startBrainGame from '..';
import { getQA, getRundomNumber } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (first, second) => {
  const min = Math.min(first, second);
  const max = Math.min(first, second);
  if (min === 0) {
    return Math.abs(max);
  }
  return getGCD(min, max % min);
};

const getGameData = () => {
  const first = getRundomNumber(1, 100);
  const second = getRundomNumber(1, 100);
  const question = `${first} ${second}`;
  const correctAnswer = getGCD(first, second);

  return getQA(question, correctAnswer);
};

const startGCDGame = () => startBrainGame(description, getGameData);
export default startGCDGame;
