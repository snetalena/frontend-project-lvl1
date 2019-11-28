import readlineSync from 'readline-sync';

import { getQuestion, getAnswer } from './util';

const startBrainGame = (description, getGame) => {
  console.log('Welcome to the Brain Games!');
  if (description !== false) {
    console.log(description);
  }

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  if (getGame === false) return false;
  const roundsAmount = 3;
  for (let i = 1; i <= roundsAmount; i += 1) {
    const gamePair = getGame();
    const question = getQuestion(gamePair);
    const correctAnswer = String(getAnswer(gamePair));
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startBrainGame;
