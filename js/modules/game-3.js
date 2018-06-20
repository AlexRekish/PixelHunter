import * as utils from '../utils';
// import * as render from '../render';
// import * as finalStats from './finalStats';
// import * as greetings from './greetings';
// import * as footer from './footer';
// import * as gameHeader from './gameHeader';
// import * as data from '../data';
// import * as gameStats from './gameStats';
import {ThirdGameView} from '../views/ThirdGameView';
// export const screen = () => {
// const thirdGameTemplate = `
// ${gameHeader.gameHeader(data.currentState)}
// <div class="game">
//   <p class="game__task">${data.game[2].description}</p>
//   <form class="game__content  game__content--triple">
//     <div class="game__option">
//       <img src="${data.game[2].params[0].src}" alt="Option 1" width="304" height="455">
//     </div>
//     <div class="game__option  game__option--selected">
//       <img src="${data.game[2].params[1].src}" alt="Option 1" width="304" height="455">
//     </div>
//     <div class="game__option">
//       <img src="${data.game[2].params[2].src}" alt="Option 1" width="304" height="455">
//     </div>
//   </form>
//   <div class="stats">
//   ${gameStats.gameStats(data.currentState.stats.answers)}
//   </div>
// </div>
// ${footer.footer}`;
//   const thirdGameScreen = utils.getElementFromTemplate(thirdGameTemplate);
//   const answers3 = thirdGameScreen.querySelector(`.game__content`);
//   answers3.addEventListener(`click`, (evt) => {
//     if (!evt.target.classList.contains(`game__content`)) {
//       // render.switchScreens(finalStats.screen());
//       utils.checkAnswer(evt);
//     }
//   });
//   const back = thirdGameScreen.querySelector(`.header__back`);
//   back.addEventListener(`click`, () => {
//     render.switchScreens(greetings.screen());
//   });
//   return thirdGameScreen;
// };

export const thirdGame = new ThirdGameView();
thirdGame.onAnswer = (target) => {
  if (!target.classList.contains(`game__content`)) {
    utils.checkAnswer(target);
  }
};
