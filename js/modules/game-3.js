import * as utils from '../utils';
import * as render from '../render';
import * as stats from './stats';
import * as greetings from './greetings';
import * as footer from './footer';
import * as gameHeader from './gameHeader';
import * as data from '../data';
const thirdGameTemplate = `
  ${gameHeader.gameHeader(data.initialState)}
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
  ${footer.footer}`;
export const screen = () => {
  const thirdGameScreen = utils.getElementFromTemplate(thirdGameTemplate);
  const answers3 = thirdGameScreen.querySelector(`.game__content`);
  answers3.addEventListener(`click`, (evt) => {
    if (!evt.target.classList.contains(`game__content`)) {
      render.switchScreens(stats.screen());
    }
  });
  const back = thirdGameScreen.querySelector(`.header__back`);
  back.addEventListener(`click`, () => {
    render.switchScreens(greetings.screen());
  });
  return thirdGameScreen;
};
