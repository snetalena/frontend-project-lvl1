import { startBrainGame, getPair } from '..';

const description = () => console.log('Answer "yes" if the number is even, otherwise answer "no"');

const getGame = () => {
  const question = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + Math.ceil(1);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return getPair(question, correctAnswer);
};

const startEvenGame = () => startBrainGame(description, getGame);
export default startEvenGame;
