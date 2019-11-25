import { startBrainGame, getRundomNumber } from '..';
import { getPair } from '../util';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const constIsEven = (number) => number % 2 === 0;

const getGame = () => {
  const question = getRundomNumber(1, 100);
  const correctAnswer = constIsEven(question) ? 'yes' : 'no';
  return getPair(question, correctAnswer);
};

const startEvenGame = () => startBrainGame(description, getGame);
export default startEvenGame;
