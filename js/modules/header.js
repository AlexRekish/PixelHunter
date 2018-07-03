import {HeaderView} from '../views/HeaderView';
import * as render from '../render';
import {greetings} from './greetings';
import * as data from '../data';
import * as utils from '../utils';

export const header = new HeaderView();
header.onBack = () => {
  data.currentState = ``;
  clearTimeout(utils.currentTimer);
  render.switchScreens(greetings.element);
};
