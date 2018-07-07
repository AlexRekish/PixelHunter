import {IntroView} from '../views/IntroView';
import AbstractPresenter from './AbstractPresenter';
import app from '../Application';

class IntroPresenter extends AbstractPresenter {
  constructor() {
    super(new IntroView());
  }

  listener() {
    this.view.onNext = () => {
      app.showGreetings();
    };
  }
}

export const introPresenter = new IntroPresenter();


