import {rulesPresenter} from './presenters/RulesPresenter';
import {gamePresenter} from './presenters/GamePresenter';
import {greetingsPresenter} from './presenters/GreetingsPresenter';
import {introPresenter} from './presenters/IntroPresenter';
import {statsPresenter} from './presenters/StatsPresenter';
import Model from './model/Model';
import * as data from './model/data';
import preloaderPresenter from './presenters/PreloaderPresenter';

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
    this.name = ``;

    this.model = new class extends Model {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;
      }

      get urlWrite() {
        return this._urlWrite;
      }

      set urlWrite(url) {
        this._urlWrite = url;
      }
    }();

    this.model.loadQuestions()
      .then((dq) => {
        data.downloadedQuestion = dq;
      })
      .then(() => this.setup())
      .then(() => this.changeController(getControllerIDFromHash(location.hash)))
      .catch((err) => window.console.warn(err));
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

  showPreloader() {
    preloaderPresenter.init();
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
  showGame(name) {
    this.name = name;
    this.model.urlWrite = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/${this.name}`;
    location.hash = ControllerID.GAME;
  }
  showStats() {
    this.model.loadStat()
      .then((dd) => {
        statsPresenter.statistic = dd;
      })
      .then(() => {
        if (gamePresenter.state.stats) {
          ControllerID.STAT = statsPresenter.parseToParamPoints();
          this.routes[ControllerID.STAT] = statsPresenter;
          location.hash = ControllerID.STAT;
        } else {
          statsPresenter.refreshStat();
        }
      })
      .catch((err) => window.console.warn(err));
  }
}

const app = new Application();
app.showPreloader();

export default app;
