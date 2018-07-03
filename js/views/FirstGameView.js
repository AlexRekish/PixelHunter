import {AbstractView} from './AbstractView';
import * as footer from '../modules/footer';
import * as data from '../data';
import * as gameStats from '../modules/gameStats';

export class FirstGameView extends AbstractView {
  get template() {
    return `
      <div class="game">
        <p class="game__task">${data.game[1].description}</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${data.game[1].params[0].src}" alt="Option 1" width="468" height="458">
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
            <img src="${data.game[1].params[1].src}" alt="Option 2" width="468" height="458">
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
        ${gameStats.gameStats(data.currentState.stats.answers)}
        </div>
      </div>
      ${footer.footer}`.trim();
  }
  bind() {
    const answers1 = this._element.querySelector(`.game__content`);
    answers1.addEventListener(`change`, (evt) => {
      evt.preventDefault();
      this.onAnswer(answers1);
    });
  }
  onAnswer() {
    //
  }
}
