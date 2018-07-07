import * as data from '../model/data';
import {gamePresenter} from './GamePresenter';
import {headerPresenter} from './HeaderPresenter';
import {StatsView} from '../views/StatsView';
import AbstractPresenter from './AbstractPresenter';

class StatsPresenter extends AbstractPresenter {
  constructor() {
    super(new StatsView());
    this.statistic = [];
    if (this.statistic.length < 3) {
      while (this.statistic.length < 3) {
        this.statistic.push(data.initialState.stats);
      }
    }
  }

  // функция обновления статистики

  refreshStat() {
    if (gamePresenter.state.stats) {
      this.statistic.unshift(gamePresenter.state.stats);
      if (this.statistic.length > 3) {
        this.statistic.length = 3;
      }
    } else {
      this.statistic.unshift(this.parseFromParamPoints().stats);
      this.statistic.length = 1;
    }
  }

  // функция отрисовки статистики

  renderStat() {
    this.switchScreens(this.view.element, headerPresenter.view.element);
    gamePresenter.state = JSON.parse(JSON.stringify(data.initialState));
  }

  // функция подсчета очков

  countPoints(state, lives) {
    let correct = state.score = state.rightAnswers * data.Points.CORRECT; // correct answers
    let fast = state.speedBonus.points = state.speedBonus.count * data.Points.FAST; // fast bonus
    let slow = state.slowPenalty.points = state.slowPenalty.count * data.Points.SLOW; // slow penalty
    state.livesBonus.count = lives;
    let live = state.livesBonus.points = state.livesBonus.count * data.Points.LIVES; // lives bonus
    let totalPoints = state.totalScore = correct + fast + slow + live;
    return totalPoints;
  }

  // функция парсинга статистики из хэша

  parseFromParamPoints() {
    const state = JSON.parse(JSON.stringify(data.initialState));
    const stats = location.hash;
    state.time = ``;
    state.lives = +stats.charAt(stats.indexOf(`-`) + 1); // количество жизней, первый символ после `-` в хэше
    const [...answers] = stats.slice(stats.indexOf(`-`) + 2);
    answers.forEach((val, i) => {
      state.stats.answers[i] = data.paramPoints[val];
      switch (+val) {
        case 0:
          break;
        case 1:
          state.stats.rightAnswers++;
          break;
        case 2:
          state.stats.rightAnswers++;
          state.stats.slowPenalty.count++;
          break;
        case 3:
          state.stats.rightAnswers++;
          state.stats.speedBonus.count++;
          break;
        case 4:
          break;
      }
    });
    if (state.stats.rightAnswers < 8) {
      state.stats.result = `FAIL`;
    } else {
      state.stats.result = `Победа`;
    }

    this.countPoints(state.stats, state.lives);
    return state;
  }

  // функция парсинга статистики в хэш

  parseToParamPoints() {
    const state = this.statistic[0];
    const hashArr = state.answers.map((val) => {
      return data.paramPoints.findIndex((el) => el === val);
    });
    hashArr.unshift(gamePresenter.state.lives);
    return `stat-${hashArr.join(``)}`;
  }

  init() {
    this.renderStat();
  }
}

export const statsPresenter = new StatsPresenter();
