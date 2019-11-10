#!/usr/bin/node

import {
  userName, randomNumber, userAnswer, checkAnswer, game
} from '..';

console.log('Welcome to the Brain Games!');

console.log('Answer "yes" if the number is even, otherwise answer "no"');

const name = userName();
console.log(`Hello, ${name}!`);

// let rightAnswers = 0;

// const game = () => {
//   while (rightAnswers < 3) {
//     const randomNum = randomNumber();
//     console.log(`Question: ${randomNum}`);
//     const userAns = userAnswer();

//     if (checkAnswer(userAns, randomNum)) {
//       console.log('Correct!');
//       rightAnswers += 1;
//       continue;
//     }
//     console.log(`${userAns} is wrong answer ;(. Correct answer was ${userAns === 'yes' ? 'no' : 'yes'}. Let's try again, ${userName()}!`);
//     break;
//   }
//   return rightAnswers;
// };

if (game(name) === 3) {
  console.log(`Congratulations, ${name}!`);
}
