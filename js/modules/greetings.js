// import * as utils from '../utils';
import * as render from '../render';
import {rules} from './rules';
// import * as footer from './footer';
import {GreetingsView} from '../views/GreetingsView';
// const greetingsTemplate = `
//   <div class="greeting central--blur">
//     <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
//     <h1 class="greeting__asterisk">*</h1>
//     <div class="greeting__challenge">
//       <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
//       <p>Правила игры просты.<br>
//         Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
//         Задача кажется тривиальной, но не думай, что все так просто.<br>
//         Фотореализм обманчив и коварен.<br>
//         Помни, главное — смотреть очень внимательно.</p>
//     </div>
//     <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
//   </div>
//   ${footer.footer}`;
// export const screen = () => {
//   const greetingsScreen = utils.getElementFromTemplate(greetingsTemplate);
//   const arrow = greetingsScreen.querySelector(`.greeting__continue`);
//   arrow.addEventListener(`click`, () => {
//     render.switchScreens(rules.screen());
//   });
//   return greetingsScreen;
// };
export const greetings = new GreetingsView();
greetings.onClick = () => {
  render.switchScreens(rules.element);
};


