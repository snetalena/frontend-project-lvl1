import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name?');

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
// Максимум и минимум включаются

export const userAnswer = () => readlineSync.question('Your answer:');

export const checkAnswer = (userAns, randomNum, correct = 'no') => {
  if (randomNum % 2 === 0) {
    correct = 'yes';
  }
  if (userAns === correct) {
    return true;
  }
  return false;
};

export const game = (name) => {
  let rightAnswers = 0;
  while (rightAnswers < 3) {
    const randomNum = getRandomNumber(1, 100);
    console.log(`Question: ${randomNum}`);
    const userAns = userAnswer();

    if (checkAnswer(userAns, randomNum)) {
      console.log('Correct!');
      rightAnswers += 1;
    } else {
      console.log(`${userAns} is wrong answer ;(. Correct answer was ${userAns === 'yes' ? 'no' : 'yes'}. Let's try again, ${name}!`);
      break;
    }
  }
  return rightAnswers;
};

export default userName;
