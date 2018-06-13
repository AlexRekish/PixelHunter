import * as utils from '../utils';
import * as render from '../render';
import * as secondGame from './game-2';
import * as greetings from './greetings';
import * as footer from './footer';
import * as gameHeader from './gameHeader';
import * as data from '../data';
const firstGameTemplate = `
  ${gameHeader.gameHeader(data.initialState)}
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
  ${footer.footer}`;
export const screen = () => {
  const firstGameScreen = utils.getElementFromTemplate(firstGameTemplate);
  const answers1 = firstGameScreen.querySelector(`.game__content`);
  answers1.addEventListener(`change`, () => {
    if (answers1.querySelector(`input[name=question1]:checked`) && answers1.querySelector(`input[name=question2]:checked`)) {
      render.switchScreens(secondGame.screen());
    }
  });
  const back = firstGameScreen.querySelector(`.header__back`);
  back.addEventListener(`click`, () => {
    render.switchScreens(greetings.screen());
  });
  return firstGameScreen;
};
