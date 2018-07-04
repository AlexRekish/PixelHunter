import * as render from '../render';
import {greetingsPresenter} from './GreetingsPresenter';
import {IntroView} from '../views/IntroView';
import AbstractPresenter from './AbstractPresenter';

class IntroPresenter extends AbstractPresenter {
  constructor() {
    super(new IntroView());
  }

  listener() {
    this.view.onNext = () => {
      render.switchScreens(greetingsPresenter.view.element);
    };
  }
}

export const introPresenter = new IntroPresenter();
introPresenter.listener();


