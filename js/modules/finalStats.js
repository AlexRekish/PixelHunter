// import * as utils from '../utils';
// import * as data from '../data';
// import * as render from '../render';
// import * as greetings from './greetings';
// import * as footer from './footer';
// import * as header from './staticHeader';
// import * as gameStats from './gameStats';
import {FinalStatsView} from '../views/FinalStatsView';
// export const screen = () => {
//   const speedBonus = (i) => {
//     if (data.statistic[i].speedBonus.count > 0) {
//       return `<tr>
//         <td></td>
//         <td class="result__extra">Бонус за скорость:</td>
//         <td class="result__extra">${data.statistic[i].speedBonus.count}&nbsp;<span class="stats__result stats__result--fast"></span></td>
//         <td class="result__points">×&nbsp;${data.points.FAST}</td>
//         <td class="result__total">${data.statistic[i].speedBonus.points}</td>
//       </tr>
//       <tr>`;
//     }
//     return ``;
//   };
//   const livesBonus = (i) => {
//     if (data.statistic[i].livesBonus.count > 0) {
//       return `<tr>
//         <td></td>
//         <td class="result__extra">Бонус за жизни:</td>
//         <td class="result__extra">${data.statistic[i].livesBonus.count}&nbsp;<span class="stats__result stats__result--alive"></span></td>
//         <td class="result__points">×&nbsp;${data.points.LIVES}</td>
//         <td class="result__total">${data.statistic[i].livesBonus.points}</td>
//       </tr>`;
//     }
//     return ``;
//   };
//   const slowPenalty = (i) => {
//     if (data.statistic[i].slowPenalty.count > 0) {
//       return `<tr>
//         <td></td>
//         <td class="result__extra">Штраф за медлительность:</td>
//         <td class="result__extra">${data.statistic[i].slowPenalty.count}&nbsp;<span class="stats__result stats__result--slow"></span></td>
//         <td class="result__points">×&nbsp;${Math.abs(data.points.SLOW)}</td>
//         <td class="result__total">${data.statistic[i].slowPenalty.points}</td>
//       </tr>
//       <tr>`;
//     }
//     return ``;
//   };
//   const statsTemplate = () => `
//   ${header.header}
//   <div class="result">
//     <h1>${data.currentState.stats.result}</h1>
//     ${data.statistic.map((val, i) => `<table class="result__table">
//       <tr>
//         <td class="result__number">${i + 1}.</td>
//         <td colspan="2">
//           ${gameStats.gameStats(data.statistic[i].answers)}
//         </td>
//         <td class="result__points">×&nbsp;${data.points.CORRECT}</td>
//         <td class="result__total">${data.statistic[i].score}</td>
//       </tr>
//       ${speedBonus(i)}
//       ${livesBonus(i)}
//       ${slowPenalty(i)}
//       <tr>
//         <td colspan="5" class="result__total  result__total--final">${data.statistic[i].totalScore}</td>
//       </tr>
//     </table>`).join(``)}
//   </div>
//   ${footer.footer}`;
//   const statsScreen = utils.getElementFromTemplate(statsTemplate());
//   const back = statsScreen.querySelector(`.header__back`);
//   back.addEventListener(`click`, () => {
//     render.switchScreens(greetings.screen());
//   });
//   return statsScreen;
// };
export const finalStats = new FinalStatsView();
