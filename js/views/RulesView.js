import {AbstractView} from './AbstractView';
import * as footer from '../modules/footer';
import * as staticHeader from '../modules/staticHeader';

export class RulesView extends AbstractView {
  get template() {
    return `
      ${staticHeader.header}
      <div class="rules">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
          src="img/photo_icon.png" width="16" height="16"> или рисунок <img
          src="img/paint_icon.png" width="16" height="16" alt="">.<br>
          Фотографиями или рисунками могут быть оба изображения.<br>
          На каждую попытку отводится 30 секунд.<br>
          Ошибиться можно не более 3 раз.<br>
          <br>
          Готовы?
        </p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>
      ${footer.footer}`;
  }
  bind() {
    const go = this._element.querySelector(`.rules__form`);
    const input = go.querySelector(`.rules__input`);
    const submit = go.querySelector(`.rules__button`);
    go.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this.onGameStart();
    });
    input.addEventListener(`input`, () => {
      this.onInputName(input, submit);
    });
  }
  onGameStart() {
    //
  }
  onInputName() {
    //
  }
}
