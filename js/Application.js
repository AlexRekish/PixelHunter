import {rulesPresenter} from './presenters/RulesPresenter';
import {gamePresenter} from './presenters/GamePresenter';
import {greetingsPresenter} from './presenters/GreetingsPresenter';
import {introPresenter} from './presenters/IntroPresenter';
import {statsPresenter} from './presenters/StatsPresenter';
import Model from './model/Model';
import * as data from './model/data';

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

    this.model = new class extends Model {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;
      }
    }();

    this.model.load()
      .then((dq) => {
        data.downloadedQuestion = dq;
      })
      .then(() => this.setup())
      .then(() => this.changeController(getControllerIDFromHash(location.hash)))
      .catch(window.console.error);
  }

  setup() {
    this.routes = {
      [ControllerID.INTRO]: introPresenter,
      [ControllerID.GREETINGS]: greetingsPresenter,
      [ControllerID.RULES]: rulesPresenter,
      [ControllerID.GAME]: gamePresenter
    };

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  // функция инициализации презентера в зависимости от хэша

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
// app.init();

export default app;
