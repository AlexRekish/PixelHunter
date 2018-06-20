import * as utils from '../utils';
// import * as render from '../render';
// import * as secondGame from './game-2';
// import * as greetings from './greetings';
// import * as footer from './footer';
// import * as gameHeader from './gameHeader';
// import * as data from '../data';
// import * as gameStats from './gameStats';
import {FirstGameView} from '../views/FirstGameView';
// export const screen = () => {
//   const firstGameTemplate = `
//   ${gameHeader.gameHeader(data.currentState)}
//   <div class="game">
//     <p class="game__task">${data.game[1].description}</p>
//     <form class="game__content">
//       <div class="game__option">
//         <img src="${data.game[1].params[0].src}" alt="Option 1" width="468" height="458">
//         <label class="game__answer game__answer--photo">
//           <input name="question1" type="radio" value="photo">
//           <span>Фото</span>
//         </label>
//         <label class="game__answer game__answer--paint">
//           <input name="question1" type="radio" value="paint">
//           <span>Рисунок</span>
//         </label>
//       </div>
//       <div class="game__option">
//         <img src="${data.game[1].params[1].src}" alt="Option 2" width="468" height="458">
//         <label class="game__answer  game__answer--photo">
//           <input name="question2" type="radio" value="photo">
//           <span>Фото</span>
//         </label>
//         <label class="game__answer  game__answer--paint">
//           <input name="question2" type="radio" value="paint">
//           <span>Рисунок</span>
//         </label>
//       </div>
//     </form>
//     <div class="stats">
//     ${gameStats.gameStats(data.currentState.stats.answers)}
//     </div>
//   </div>
//   ${footer.footer}`;
//   const firstGameScreen = utils.getElementFromTemplate(firstGameTemplate);
//   const answers1 = firstGameScreen.querySelector(`.game__content`);
//   answers1.addEventListener(`change`, (evt) => {
//     if (answers1.querySelector(`input[name=question1]:checked`) && answers1.querySelector(`input[name=question2]:checked`)) {
//       // render.switchScreens(secondGame.screen());
//       utils.checkAnswer(evt);
//     }
//   });
//   const back = firstGameScreen.querySelector(`.header__back`);
//   back.addEventListener(`click`, () => {
//     render.switchScreens(greetings.screen());
//   });
//   return firstGameScreen;
// };

export const firstGame = new FirstGameView();
firstGame.onAnswer = (target) => {
  if (target.querySelector(`input[name=question1]:checked`) && target.querySelector(`input[name=question2]:checked`)) {
    utils.checkAnswer(target);
  }
};
