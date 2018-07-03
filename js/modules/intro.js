import * as render from '../render';
import {greetings} from './greetings';
import {IntroView} from '../views/IntroView';

export const intro = new IntroView();
intro.onNext = () => {
  render.switchScreens(greetings.element);
};


