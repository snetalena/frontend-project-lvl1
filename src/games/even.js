import startBrainGame from '..';
import { getQA, getRundomNumber } from '../utils';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRundomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return getQA(question, correctAnswer);
};

const startEvenGame = () => startBrainGame(description, getGameData);
export default startEvenGame;
