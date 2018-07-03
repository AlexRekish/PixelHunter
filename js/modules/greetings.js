import * as render from '../render';
import {rules} from './rules';
import {GreetingsView} from '../views/GreetingsView';
import {header} from '../modules/header';

export const greetings = new GreetingsView();
greetings.onNext = () => {
  render.switchScreens(rules.element, header.element);
};


