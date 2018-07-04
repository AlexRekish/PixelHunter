import {AbstractView} from './AbstractView';
import * as data from '../data';
import {gamePresenter} from '../presenters/GamePresenter';
import {statsPresenter} from '../presenters/StatsPresenter';

export class ThirdGameView extends AbstractView {
  get template() {
    return `
      <div class="game">
        <p class="game__task">${data.game[2].description}</p>
        <form class="game__content  game__content--triple">
          <div class="game__option">
            <img src="${data.game[2].params[0].src}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected">
            <img src="${data.game[2].params[1].src}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option">
            <img src="${data.game[2].params[2].src}" alt="Option 1" width="304" height="455">
          </div>
        </form>
        <div class="stats">
        ${statsPresenter.view.gameStats(gamePresenter.state.stats.answers)}
        </div>
      </div>`.trim();
  }
  bind() {
    const answers3 = this._element.querySelector(`.game__content`);
    answers3.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onAnswer(evt.target);
    });
  }
  onAnswer() {
    //
  }
}
