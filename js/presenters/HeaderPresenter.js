import {HeaderView} from '../views/HeaderView';
import * as render from '../render';
import {greetingsPresenter} from './GreetingsPresenter';
import {currentTimer, gamePresenter} from './GamePresenter';
import AbstractPresenter from './AbstractPresenter';

class HeaderPresenter extends AbstractPresenter {
  constructor() {
    super(new HeaderView());
  }

  listener() {
    this.view.onBack = () => {
      gamePresenter.state = ``;
      clearTimeout(currentTimer);
      render.switchScreens(greetingsPresenter.view.element);
    };
  }
}

export const headerPresenter = new HeaderPresenter();
headerPresenter.listener();
