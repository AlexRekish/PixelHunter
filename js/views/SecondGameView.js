import {AbstractView} from './AbstractView';
import * as data from '../data';
import {gamePresenter} from '../presenters/GamePresenter';
import {statsPresenter} from '../presenters/StatsPresenter';

export class SecondGameView extends AbstractView {
  get template() {
    return `
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
        ${statsPresenter.view.gameStats(gamePresenter.state.stats.answers)}
        </div>
      </div>`.trim();
  }
  bind() {
    const answers2 = this._element.querySelector(`.game__content`);
    answers2.addEventListener(`change`, (evt) => {
      evt.preventDefault();
      this.onAnswer(evt.target);
    });
  }
  onAnswer() {
    //
  }
}