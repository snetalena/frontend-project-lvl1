import readlineSync from 'readline-sync';

import { getQuestion, getAnswer } from './utils';

const roundsAmount = 3;

const startBrainGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= roundsAmount; i += 1) {
    const gameQA = getGameData();
    const question = getQuestion(gameQA);
    const correctAnswer = String(getAnswer(gameQA));
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startBrainGame;
