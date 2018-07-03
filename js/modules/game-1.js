import * as utils from '../utils';
import {FirstGameView} from '../views/FirstGameView';

export const firstGame = new FirstGameView();
firstGame.onAnswer = (target) => {
  if (target.querySelector(`input[name=question1]:checked`) && target.querySelector(`input[name=question2]:checked`)) {
    utils.checkAnswer(target);
  }
};
