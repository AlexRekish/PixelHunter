import {AbstractView} from './AbstractView';
import * as data from '../data';
import {gamePresenter} from '../presenters/GamePresenter';
import {statsPresenter} from '../presenters/StatsPresenter';

export class StatsView extends AbstractView {
  gameStats(currentState) {
    return `
      <ul class="stats">
        ${new Array(data.NUMBER_OF_QUESTION).fill().map((val, i) => `<li class="stats__result stats__result--${currentState[i]}"></li>`).join(``)}
      </ul>`.trim();
  }
  get template() {
    const speedBonus = (i) => {
      if (statsPresenter.statistic[i].speedBonus.count > 0) {
        return `
            <tr>
              <td></td>
              <td class="result__extra">Бонус за скорость:</td>
              <td class="result__extra">${statsPresenter.statistic[i].speedBonus.count}&nbsp;<span class="stats__result stats__result--fast"></span></td>
              <td class="result__points">×&nbsp;${data.Points.FAST}</td>
              <td class="result__total">${statsPresenter.statistic[i].speedBonus.points}</td>
            </tr>`.trim();
      }
      return ``;
    };
    const livesBonus = (i) => {
      if (statsPresenter.statistic[i].livesBonus.count > 0) {
        return `
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${statsPresenter.statistic[i].livesBonus.count}&nbsp;<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">×&nbsp;${data.Points.LIVES}</td>
            <td class="result__total">${statsPresenter.statistic[i].livesBonus.points}</td>
          </tr>`.trim();
      }
      return ``;
    };
    const slowPenalty = (i) => {
      if (statsPresenter.statistic[i].slowPenalty.count > 0) {
        return `
            <tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${statsPresenter.statistic[i].slowPenalty.count}&nbsp;<span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">×&nbsp;${Math.abs(data.Points.SLOW)}</td>
              <td class="result__total">${statsPresenter.statistic[i].slowPenalty.points}</td>
            </tr>`.trim();
      }
      return ``;
    };
    return `
      <div class="result">
        <h1>${gamePresenter.state.stats.result}</h1>
        ${statsPresenter.statistic.map((val, i) => `<table class="result__table">
          <tr>
            <td class="result__number">${i + 1}.</td>
            <td colspan="2">
              ${this.gameStats(statsPresenter.statistic[i].answers)}
            </td>
            <td class="result__points">×&nbsp;${data.Points.CORRECT}</td>
            <td class="result__total">${statsPresenter.statistic[i].score}</td>
          </tr>
          ${speedBonus(i)}
          ${livesBonus(i)}
          ${slowPenalty(i)}
          <tr>
            <td colspan="5" class="result__total  result__total--final">${statsPresenter.statistic[i].totalScore}</td>
          </tr>
        </table>`).join(``)}
      </div>`.trim();
  }
}
