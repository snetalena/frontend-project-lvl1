import startBrainGame from '..';
import { getQA, getRundomNumber } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRundomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return getQA(question, correctAnswer);
};

const startPrimeGame = () => startBrainGame(description, getGameData);
export default startPrimeGame;
