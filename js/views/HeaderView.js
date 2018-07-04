import {AbstractView} from './AbstractView';
import {gamePresenter} from '../presenters/GamePresenter';

export class HeaderView extends AbstractView {
  get template() {
    let gameHeader = ``;
    const getGameHeader = (state) => `
      <h1 class="game__timer">${state.time}</h1>
      <div class="game__lives">
        ${new Array(3 - state.lives)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
        ${new Array(state.lives)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
      </div>`.trim();
    if (gamePresenter.state) {
      gameHeader = getGameHeader(gamePresenter.state);
    }
    return `
      <header class="header">
        <div class="header__back">
          <button class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.svg" width="101" height="44">
          </button>
        </div>
        ${gameHeader}
      </header>`.trim();
  }
  bind() {
    const back = this._element.querySelector(`.header__back`);
    back.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onBack();
    });
  }
  onBack() {
    //
  }
}
