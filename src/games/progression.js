import startBrainGame from '..';
import { getQA, getRundomNumber } from '../utils';

const description = 'What number is missing in the progression?';

const indexOfProgressionLength = 9;

const getGameData = () => {
  const start = getRundomNumber(1, 100);
  const difference = getRundomNumber(1, 20);
  const indexOfMissedPosition = getRundomNumber(0, indexOfProgressionLength);
  const question = [];
  for (let i = 0; i <= indexOfProgressionLength; i += 1) {
    question[i] = start + difference * i;
  }
  const correctAnswer = question[indexOfMissedPosition];
  question[indexOfMissedPosition] = '..';
  return getQA(question.join(' '), correctAnswer);
};

const startProgressionGame = () => startBrainGame(description, getGameData);
export default startProgressionGame;
