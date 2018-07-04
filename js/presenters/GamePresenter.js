import * as data from '../data';
import * as render from '../render';
import * as resize from '../resize';
import {statsPresenter} from './StatsPresenter';
import {headerPresenter} from './HeaderPresenter';
import {FirstGameView} from '../views/FirstGameView';
import {SecondGameView} from '../views/SecondGameView';
import {ThirdGameView} from '../views/ThirdGameView';
import AbstractPresenter from './AbstractPresenter';

export let currentTimer;

class GamePresenter extends AbstractPresenter {
  constructor(currentState) {
    super(``);
    this.state = currentState;
    this.questions = [];
  }

  // функция запуска игры

  startGame() {
    this.questions.length = 0;
    this.questions.push(...data.questions());
    this.state = JSON.parse(JSON.stringify(data.initialState));
    if (statsPresenter.statistic.length < 3) {
      while (statsPresenter.statistic.length < 3) {
        statsPresenter.statistic.push(data.initialState.stats);
      }
    }
    this.renderCurrentQuestion();
  }

  // функция отрисовки вопроса

  renderCurrentQuestion() {
    switch (this.questions[this.state.question].mode) {
      case data.GameMode.ONE_IMAGE:
        clearTimeout(currentTimer);
        this.view = new SecondGameView();
        this.view.onAnswer = (target) => {
          gamePresenter.checkAnswer(target);
        };
        render.switchScreens(this.view.element, headerPresenter.view.element);
        resize.setPicturesSizes();
        this.timer();
        break;
      case data.GameMode.TWO_IMAGES:
        clearTimeout(currentTimer);
        this.view = new FirstGameView();
        this.view.onAnswer = (target) => {
          if (target.querySelector(`input[name=question1]:checked`) && target.querySelector(`input[name=question2]:checked`)) {
            gamePresenter.checkAnswer(target);
          }
        };
        render.switchScreens(this.view.element, headerPresenter.view.element);
        resize.setPicturesSizes();
        this.timer();
        break;
      case data.GameMode.THREE_IMAGES:
        clearTimeout(currentTimer);
        this.view = new ThirdGameView();
        this.view.onAnswer = (target) => {
          if (!target.classList.contains(`game__content`)) {
            gamePresenter.checkAnswer(target);
          }
        };
        render.switchScreens(this.view.element, headerPresenter.view.element);
        resize.setPicturesSizes();
        this.timer();
        break;
    }
  }

  // функция обработки перехода к следующему вопросу

  nextQuestion() {
    this.state.question++;
    if (this.state.question < 10) {
      this.renderCurrentQuestion();
    } else {
      this.youWin();
    }
  }

  // функция проверки правильности ответа

  checkAnswer(target) {
    switch (this.questions[this.state.question].mode) {
      case data.GameMode.ONE_IMAGE:
        let modeOneQuestion = document.querySelector(`input[name=question1]:checked`);
        if (modeOneQuestion.value === this.questions[this.state.question].params[0].type) {
          this.rightAnswer();
        } else {
          this.wrongAnswer();
        }
        break;
      case data.GameMode.TWO_IMAGES:
        let question1 = document.querySelector(`input[name=question1]:checked`);
        let question2 = document.querySelector(`input[name=question2]:checked`);
        if (question1.value === this.questions[this.state.question].params[0].type && question2.value === this.questions[this.state.question].params[1].type) {
          this.rightAnswer();
        } else {
          this.wrongAnswer();
        }
        break;
      case data.GameMode.THREE_IMAGES:
        let [...questionsArr] = document.querySelectorAll(`.game__option`);
        let paint = this.questions[this.state.question].params.findIndex((val) => val.type === `paint`);
        if (target === questionsArr[paint]) {
          this.rightAnswer();
        } else {
          this.wrongAnswer();
        }
        break;
    }
  }

  // функция проверки возможности продолжать игру

  checkLives() {
    if (this.state.lives > 0) {
      this.nextQuestion();
    } else {
      this.youLose();
    }
  }

  // функция обработки неверного ответа

  wrongAnswer() {
    this.state.lives--;
    this.state.stats.answers[this.state.question] = data.AnswerStatus.WRONG;
    this.checkLives();
  }

  // функция обработки верного ответа

  rightAnswer() {
    if (this.state.time > 20) {
      this.state.stats.answers[this.state.question] = data.AnswerStatus.FAST;
      this.state.stats.speedBonus.count++;
    } else if (this.state.time <= 20 && this.state.time >= 10) {
      this.state.stats.answers[this.state.question] = data.AnswerStatus.CORRECT;
    } else if (this.state.time < 10) {
      this.state.stats.answers[this.state.question] = data.AnswerStatus.SLOW;
      this.state.stats.slowPenalty.count++;
    }
    this.state.stats.rightAnswers++;
    this.nextQuestion();
  }

  // функция обработки победы

  youWin() {
    this.state.stats.result = `Победа!`;
    this.state.time = ``;
    statsPresenter.countPoints();
    clearTimeout(currentTimer);
    statsPresenter.refreshStat();
  }

  // функция обработки поражения

  youLose() {
    this.state.stats.result = `FAIL`;
    this.state.stats.totalScore = `FAIL`;
    this.state.time = ``;
    clearTimeout(currentTimer);
    statsPresenter.refreshStat();
  }

  // функция таймера

  timer() {
    let that = this;
    that.state.time = 30;
    render.refreshHeader();
    currentTimer = setTimeout(function tick() {
      if (that.state.time > 0) {
        that.state.time--;
        render.refreshHeader();
        currentTimer = setTimeout(tick, 1000);
      } else {
        that.wrongAnswer();
      }
    }, 1000);
  }
}

export const gamePresenter = new GamePresenter(data.currentState);
