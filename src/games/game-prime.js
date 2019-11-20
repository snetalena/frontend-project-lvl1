import { startBrainGame, getPair, getRundomNumber } from '..';

const description = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGame = () => {
  const question = getRundomNumber(1, 100);
  let correctAnswer = false;
  correctAnswer = isPrime(question) ? 'yes' : 'no';
  return getPair(question, correctAnswer);
};

const startPrimeGame = () => startBrainGame(description, getGame);
export default startPrimeGame;
