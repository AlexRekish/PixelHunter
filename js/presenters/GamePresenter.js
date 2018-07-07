import * as data from '../model/data';
import {statsPresenter} from './StatsPresenter';
import {headerPresenter} from './HeaderPresenter';
import {FirstGameView} from '../views/FirstGameView';
import {SecondGameView} from '../views/SecondGameView';
import {ThirdGameView} from '../views/ThirdGameView';
import AbstractPresenter from './AbstractPresenter';
import app from '../Application';

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
    this.questions.push(...data.downloadedQuestion);
    this.state = JSON.parse(JSON.stringify(data.initialState));
    this.renderCurrentQuestion();
  }

  // функция отрисовки вопроса

  renderCurrentQuestion() {
    switch (this.questions[this.state.question].type) {
      case data.GameMode.ONE_IMAGE:
        clearTimeout(currentTimer);
        this.view = new SecondGameView();
        this.view.onAnswer = (target) => {
          gamePresenter.checkAnswer(target);
        };
        this.render();
        break;
      case data.GameMode.TWO_IMAGES:
        clearTimeout(currentTimer);
        this.view = new FirstGameView();
        this.view.onAnswer = (target) => {
          if (target.querySelector(`input[name=question1]:checked`) && target.querySelector(`input[name=question2]:checked`)) {
            gamePresenter.checkAnswer(target);
          }
        };
        this.render();
        break;
      case data.GameMode.THREE_IMAGES:
        clearTimeout(currentTimer);
        this.view = new ThirdGameView();
        this.view.onAnswer = (target) => {
          if (!target.classList.contains(`game__content`)) {
            gamePresenter.checkAnswer(target);
          }
        };
        this.render();
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
    switch (this.questions[this.state.question].type) {
      case data.GameMode.ONE_IMAGE:
        let modeOneQuestion = document.querySelector(`input[name=question1]:checked`);
        if (modeOneQuestion.value === this.questions[this.state.question].answers[0].type) {
          this.rightAnswer();
        } else {
          this.wrongAnswer();
        }
        break;
      case data.GameMode.TWO_IMAGES:
        let question1 = document.querySelector(`input[name=question1]:checked`);
        let question2 = document.querySelector(`input[name=question2]:checked`);
        if (question1.value === this.questions[this.state.question].answers[0].type && question2.value === this.questions[this.state.question].answers[1].type) {
          this.rightAnswer();
        } else {
          this.wrongAnswer();
        }
        break;
      case data.GameMode.THREE_IMAGES:
        let [...questionsArr] = document.querySelectorAll(`.game__option`);
        let paint = this.questions[this.state.question].answers.findIndex((val) => val.type === `paint`);
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
    statsPresenter.countPoints(this.state.stats, this.state.lives);
    clearTimeout(currentTimer);
    app.showStats();
  }

  // функция обработки поражения

  youLose() {
    this.state.stats.result = `FAIL`;
    this.state.stats.totalScore = `FAIL`;
    this.state.time = ``;
    clearTimeout(currentTimer);
    app.showStats();
  }

  // функция таймера

  timer() {
    let that = this;
    that.state.time = 30;
    headerPresenter.refreshHeader();
    currentTimer = setTimeout(function tick() {
      if (that.state.time > 0) {
        that.state.time--;
        headerPresenter.refreshHeader();
        currentTimer = setTimeout(tick, 1000);
      } else {
        that.wrongAnswer();
      }
    }, 1000);
  }

  // функция подгона размера изображений под размер фрейма

  setPicturesSizes() {
    let game = document.querySelector(`.game`);
    let [...pictures] = game.querySelectorAll(`img`);
    pictures.forEach((el) => {
      el.style.objectFit = `contain`;
    });
  }

  // функция отрисовки игрового экрана

  render() {
    this.switchScreens(this.view.element, headerPresenter.view.element);
    this.setPicturesSizes();
    this.timer();
  }

  init() {
    this.startGame();
  }
}

export const gamePresenter = new GamePresenter(data.currentState);
