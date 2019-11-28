import startBrainGame from '..';
import { getPair, getRundomNumber } from '../util';

const description = 'What number is missing in the progression?';

const getGame = () => {
  const start = getRundomNumber(1, 100);
  const difference = getRundomNumber(1, 20);
  const progressionLength = 9;
  const missedPosition = getRundomNumber(0, progressionLength);
  const question = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    question[i] = start + difference * i;
  }
  const correctAnswer = question[missedPosition];
  question[missedPosition] = '..';
  return getPair(question.join(' '), correctAnswer);
};

const startProgressionGame = () => startBrainGame(description, getGame);
export default startProgressionGame;
