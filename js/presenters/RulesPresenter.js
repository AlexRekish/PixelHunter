import {gamePresenter} from './GamePresenter';
import {RulesView} from '../views/RulesView';
import AbstractPresenter from './AbstractPresenter';

class RulesPresenter extends AbstractPresenter {
  constructor() {
    super(new RulesView());
  }

  listener() {
    this.view.onGameStart = () => {
      gamePresenter.startGame();
    };

    this.view.onInputName = (input, submit) => {
      if (input.value) {
        submit.disabled = false;
      }
    };
  }
}

export const rulesPresenter = new RulesPresenter();
rulesPresenter.listener();
