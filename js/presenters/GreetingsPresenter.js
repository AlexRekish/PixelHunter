import {GreetingsView} from '../views/GreetingsView';
import AbstractPresenter from './AbstractPresenter';
import app from '../Application';

class GreetingsPresenter extends AbstractPresenter {
  constructor() {
    super(new GreetingsView());
  }

  listener() {
    this.view.onNext = () => {
      app.showRules();
    };
  }
}
export const greetingsPresenter = new GreetingsPresenter();


