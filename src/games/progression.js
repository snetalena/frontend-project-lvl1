import startBrainGame from '..';
import { getQA, getRundomNumber } from '../utils';

const description = 'What number is missing in the progression?';

const ProgressionLength = 10;

const getGameData = () => {
  const start = getRundomNumber(1, 100);
  const difference = getRundomNumber(1, 20);
  const indexOfMissedPosition = getRundomNumber(0, ProgressionLength - 9);
  const question = [];
  for (let i = 0; i <= ProgressionLength - 1; i += 1) {
    question[i] = start + difference * i;
  }
  const correctAnswer = question[indexOfMissedPosition];
  question[indexOfMissedPosition] = '..';
  return getQA(question.join(' '), correctAnswer);
};

const startProgressionGame = () => startBrainGame(description, getGameData);
export default startProgressionGame;
