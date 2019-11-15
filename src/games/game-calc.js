import { startBrainGame, getPair } from '..';

const description = () => console.log('What is the result of the expression');

const getGame = () => {
  const getNumber = () => Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + Math.ceil(1);
  let question = false;
  let correctAnswer = false;
  const first = getNumber();
  const second = getNumber();
  const someNumber = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1)) + Math.ceil(1);
  if (someNumber === 1) {
    question = `${first} - ${second}`;
    correctAnswer = first - second;
  } else if (someNumber === 2) {
    question = `${first} + ${second}`;
    correctAnswer = first + second;
  } else {
    question = `${first} * ${second}`;
    correctAnswer = first * second;
  }
  return getPair(question, correctAnswer);
};

const startCalcGame = () => startBrainGame(description, getGame);
export default startCalcGame;
