import * as utils from '../utils';
import {RulesView} from '../views/RulesView';

export const rules = new RulesView();
rules.onGameStart = () => {
  utils.startGame();
};

rules.onInputName = (input, submit) => {
  if (input.value) {
    submit.disabled = false;
  }
};
