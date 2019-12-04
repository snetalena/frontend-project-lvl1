import { cons, car, cdr } from 'hexlet-pairs';

export const getQA = (question, answer) => cons(question, answer);
export const getQuestion = (gamePair) => car(gamePair);
export const getAnswer = (gamePair) => cdr(gamePair);
export const getRundomNumber = (min, max) => Math.floor(Math.random()
* (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
