import { startBrainGame, getPair, getRundomNumber } from '..';

const description = () => console.log('Find the greatest common divisor of given numbers.');

const getGCD = (maxNum, minNum) => {
  if (minNum === 0) {
    return Math.abs(maxNum);
  }
  return getGCD(minNum, maxNum % minNum);
};

const getGame = () => {
  let question = false;
  let correctAnswer = false;
  const first = getRundomNumber(1, 100);
  const second = getRundomNumber(1, 100);
  question = `${first} ${second}`;

  correctAnswer = getGCD(Math.min(first, second), Math.max(first, second));

  return getPair(question, correctAnswer);
};

const startGCDGame = () => startBrainGame(description, getGame);
export default startGCDGame;
