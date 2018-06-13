import * as utils from '../utils';
import * as render from '../render';
import * as greetings from './greetings';
import * as footer from './footer';
const introTemplate = `
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${footer.footer}`;
export const screen = () => {
  const introScreen = utils.getElementFromTemplate(introTemplate);
  const asterisk = introScreen.querySelector(`.intro__asterisk`);
  asterisk.addEventListener(`click`, () => {
    render.switchScreens(greetings.screen());
  });
  return introScreen;
};


