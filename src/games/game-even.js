import { startBrainGame, getPair, getRundomNumber } from '..';

const description = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getGame = () => {
  const question = getRundomNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return getPair(question, correctAnswer);
};

const startEvenGame = () => startBrainGame(description, getGame);
export default startEvenGame;
