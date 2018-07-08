import {RulesView} from '../views/RulesView';
import AbstractPresenter from './AbstractPresenter';
import {headerPresenter} from './HeaderPresenter';
import app from '../Application';

class RulesPresenter extends AbstractPresenter {
  constructor() {
    super(new RulesView());
  }

  listener() {
    this.view.onGameStart = (name) => {
      app.showGame(name);
    };

    this.view.onInputName = (input, submit) => {
      if (input.value) {
        submit.disabled = false;
      }
    };
  }

  init() {
    this.listener();
    this.switchScreens(this.view.element, headerPresenter.view.element);
  }
}

export const rulesPresenter = new RulesPresenter();
