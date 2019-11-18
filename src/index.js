import readlineSync from 'readline-sync';

import { cons, car, cdr } from 'hexlet-pairs';

export const getRundomNumber = (min, max) => Math.floor(Math.random()
* (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

export const getPair = (question, answer) => cons(question, answer);

const getQuestion = (gamePair) => car(gamePair);

const getAnswer = (gamePair) => cdr(gamePair);

export const startBrainGame = (description, getGame) => {
  console.log('Welcome to the Brain Games!');
  if (description !== false) {
    description();
  }

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  if (getGame === false) return false;
  for (let i = 1; i <= 3; i += 1) {
    const gamePair = getGame();
    const question = getQuestion(gamePair);
    const correctAnswer = String(getAnswer(gamePair));
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};
