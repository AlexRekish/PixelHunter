import * as utils from '../utils';
import {ThirdGameView} from '../views/ThirdGameView';

export const thirdGame = new ThirdGameView();
thirdGame.onAnswer = (target) => {
  if (!target.classList.contains(`game__content`)) {
    utils.checkAnswer(target);
  }
};
