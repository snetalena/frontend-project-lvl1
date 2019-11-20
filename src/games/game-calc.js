import { startBrainGame, getPair, getRundomNumber } from '..';

const description = () => console.log('What is the result of the expression?');

const getGame = () => {
  let question = false;
  let correctAnswer = false;
  const first = getRundomNumber(1, 100);
  const second = getRundomNumber(1, 100);
  const someNumber = getRundomNumber(1, 3);
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
