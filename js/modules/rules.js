import * as utils from '../utils';
// import * as render from '../render';
// import * as greetings from './greetings';
// import * as firstGame from './game-1';
// import * as footer from './footer';
// import * as staticHeader from './staticHeader';
import {RulesView} from '../views/RulesView';
// import * as data from '../data';
// const rulesTemplate = `
//   ${staticHeader.header}
//   <div class="rules">
//     <h1 class="rules__title">Правила</h1>
//     <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
//       src="img/photo_icon.png" width="16" height="16"> или рисунок <img
//       src="img/paint_icon.png" width="16" height="16" alt="">.<br>
//       Фотографиями или рисунками могут быть оба изображения.<br>
//       На каждую попытку отводится 30 секунд.<br>
//       Ошибиться можно не более 3 раз.<br>
//       <br>
//       Готовы?
//     </p>
//     <form class="rules__form">
//       <input class="rules__input" type="text" placeholder="Ваше Имя">
//       <button class="rules__button  continue" type="submit" disabled>Go!</button>
//     </form>
//   </div>
//   ${footer.footer}`;
// export const screen = () => {
//   const rulesScreen = utils.getElementFromTemplate(rulesTemplate);
//   const go = rulesScreen.querySelector(`.rules__form`);
//   const input = go.querySelector(`.rules__input`);
//   const submit = go.querySelector(`.rules__button`);
//   const back = rulesScreen.querySelector(`.header__back`);
//   back.addEventListener(`click`, () => {
//     render.switchScreens(greetings.screen());
//   });
//   go.addEventListener(`submit`, () => utils.startGame());
//   input.addEventListener(`input`, () => {
//     if (input.value) {
//       submit.disabled = false;
//     }
//   });
//   return rulesScreen;
// };
export const rules = new RulesView();
rules.onGameStart = () => {
  utils.startGame();
};

rules.onInputName = (input, submit) => {
  if (input.value) {
    submit.disabled = false;
  }
};
