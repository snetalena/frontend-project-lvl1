import { startBrainGame, getRundomNumber } from '..';
import { getPair } from '../util';

const description = 'What number is missing in the progression?';

const getGame = () => {
  let current = getRundomNumber(1, 100);
  const difference = getRundomNumber(1, 20);
  const missedPosition = getRundomNumber(0, 9);
  let correctAnswer = '';
  const question = [];
  for (let i = 0; i <= 9; i += 1) {
    if (i === missedPosition) {
      question[i] = '..';
      correctAnswer = current + difference;
    } else {
      question[i] = current + difference;
    }
    current += difference;
  }
  return getPair(question.join(' '), correctAnswer);
};

const startProgressionGame = () => startBrainGame(description, getGame);
export default startProgressionGame;
