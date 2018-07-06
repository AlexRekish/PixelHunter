import {HeaderView} from '../views/HeaderView';
import {currentTimer, gamePresenter} from './GamePresenter';
import AbstractPresenter from './AbstractPresenter';
import app from '../Application';

class HeaderPresenter extends AbstractPresenter {
  constructor() {
    super(new HeaderView());
  }

  listener() {
    this.view.onBack = () => {
      gamePresenter.state = ``;
      clearTimeout(currentTimer);
      app.showGreetings();
    };
  }

  refreshHeader() {
    this.main.replaceChild(this.view.element, this.main.firstChild);
  }
}

export const headerPresenter = new HeaderPresenter();
headerPresenter.listener();
