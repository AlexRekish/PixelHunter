import {rulesPresenter} from './presenters/RulesPresenter';
import {gamePresenter} from './presenters/GamePresenter';
import {greetingsPresenter} from './presenters/GreetingsPresenter';
import {introPresenter} from './presenters/IntroPresenter';
import {statsPresenter} from './presenters/StatsPresenter';

export const ControllerID = {
  INTRO: ``,
  GREETINGS: `greetings`,
  RULES: `rules`,
  GAME: `game`,
  STAT: `stat`
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class Application {
  constructor() {
    this.main = document.querySelector(`.central`);
    this.routes = {
      [ControllerID.INTRO]: introPresenter,
      [ControllerID.GREETINGS]: greetingsPresenter,
      [ControllerID.RULES]: rulesPresenter,
      [ControllerID.GAME]: gamePresenter,
      // [ControllerID.STAT]: statsPresenter,
    };

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController(route = ``) {
    let controller;
    if (route.slice(0, 4) === `stat`) {
      if (!gamePresenter.state.stats) {
        statsPresenter.refreshStat();
      }
      controller = statsPresenter;
      controller.init();
      return;
    }
    controller = this.routes[route];
    controller.init();
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

  showIntro() {
    location.hash = ControllerID.INTRO;
  }
  showGreetings() {
    location.hash = ControllerID.GREETINGS;
  }
  showRules() {
    location.hash = ControllerID.RULES;
  }
  showGame() {
    location.hash = ControllerID.GAME;
  }
  showStats() {
    statsPresenter.refreshStat();
    if (gamePresenter.state.stats) {
      ControllerID.STAT = statsPresenter.parseToParamPoints();
      this.routes[ControllerID.STAT] = statsPresenter;
      location.hash = ControllerID.STAT;
    }
  }
}

const app = new Application();
app.init();

export default app;
