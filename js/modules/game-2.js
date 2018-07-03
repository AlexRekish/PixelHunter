import * as utils from '../utils';
import {SecondGameView} from '../views/SecondGameView';

export const secondGame = new SecondGameView();
secondGame.onAnswer = (target) => {
  utils.checkAnswer(target);
};
