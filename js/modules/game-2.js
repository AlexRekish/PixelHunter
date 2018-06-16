// import * as thirdGame from './game-3';
import * as greetings from './greetings';
import * as render from '../render';
import * as utils from '../utils';
import * as footer from './footer';
import * as gameHeader from './gameHeader';
import * as data from '../data';
import * as gameStats from './gameStats';
export const screen = () => {
  const secondGameTemplate = `
  ${gameHeader.gameHeader(data.currentState)}
  <div class="game">
    <p class="game__task">${data.game[0].description}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${data.game[0].params[0].src}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
    ${gameStats.gameStats(data.currentState.stats.answers)}
    </div>
  </div>
  ${footer.footer}`;
  const secondGameScreen = utils.getElementFromTemplate(secondGameTemplate);
  const answers2 = secondGameScreen.querySelector(`.game__content`);
  answers2.addEventListener(`change`, (evt) => {
    // render.switchScreens(thirdGame.screen());
    utils.checkAnswer(evt);
  });
  const back = secondGameScreen.querySelector(`.header__back`);
  back.addEventListener(`click`, () => {
    render.switchScreens(greetings.screen());
  });
  return secondGameScreen;
};
