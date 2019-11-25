import { cons, car, cdr } from 'hexlet-pairs';

export const getPair = (question, answer) => cons(question, answer);
export const getQuestion = (gamePair) => car(gamePair);
export const getAnswer = (gamePair) => cdr(gamePair);
