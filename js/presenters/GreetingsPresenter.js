import * as render from '../render';
import {rulesPresenter} from './RulesPresenter';
import {GreetingsView} from '../views/GreetingsView';
import {headerPresenter} from './HeaderPresenter';
import AbstractPresenter from './AbstractPresenter';

class GreetingsPresenter extends AbstractPresenter {
  constructor() {
    super(new GreetingsView());
  }

  listener() {
    this.view.onNext = () => {
      render.switchScreens(rulesPresenter.view.element, headerPresenter.view.element);
    };
  }
}
export const greetingsPresenter = new GreetingsPresenter();
greetingsPresenter.listener();


