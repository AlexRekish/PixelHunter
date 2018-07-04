import * as render from '../render';
import * as data from '../data';
import {gamePresenter} from './GamePresenter';
import {headerPresenter} from './HeaderPresenter';
import {StatsView} from '../views/StatsView';
import AbstractPresenter from './AbstractPresenter';

class StatsPresenter extends AbstractPresenter {
  constructor() {
    super(new StatsView());
    this.statistic = [];
  }

  // функция обновления статистики

  refreshStat() {
    this.statistic.unshift(gamePresenter.state.stats);
    if (this.statistic.length > 3) {
      this.statistic.length = 3;
    }
    render.switchScreens(this.view.element, headerPresenter.view.element);
    gamePresenter.state = JSON.parse(JSON.stringify(data.initialState));
  }

  // функция подсчета очков

  countPoints() {
    let correct = gamePresenter.state.stats.score = gamePresenter.state.stats.rightAnswers * data.Points.CORRECT; // correct answers
    let fast = gamePresenter.state.stats.speedBonus.points = gamePresenter.state.stats.speedBonus.count * data.Points.FAST; // fast bonus
    let slow = gamePresenter.state.stats.slowPenalty.points = gamePresenter.state.stats.slowPenalty.count * data.Points.SLOW; // slow penalty
    gamePresenter.state.stats.livesBonus.count = gamePresenter.state.lives;
    let live = gamePresenter.state.stats.livesBonus.points = gamePresenter.state.stats.livesBonus.count * data.Points.LIVES; // lives bonus
    let totalPoints = gamePresenter.state.stats.totalScore = correct + fast + slow + live;
    return totalPoints;
  }


}

export const statsPresenter = new StatsPresenter();
