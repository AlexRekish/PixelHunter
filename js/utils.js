import * as data from './data';
import * as firstGame from './modules/game-1';
import * as secondGame from './modules/game-2';
import * as thirdGame from './modules/game-3';
import * as finalStats from './modules/finalStats';
import * as render from './render';

const questions = [];
let dcs; // <<< Текущее состояние игры

// функция парсинга текста в html

export function getElementFromTemplate(string) {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return container.content;
}

// функция запуска игры

export function startGame() {
  questions.length = 0;
  questions.push(...data.questions());
  data.currentState = JSON.parse(JSON.stringify(data.initialState));
  dcs = data.currentState;
  if (data.statistic.length < 3) {
    while (data.statistic.length < 3) {
      data.statistic.push(data.initialState.stats);
    }
  }
  renderCurrentQuestion();
}

// функция отрисовки вопроса

function renderCurrentQuestion() {
  switch (questions[dcs.question].mode) {
    case `oneImage`:
      render.switchScreens(secondGame.screen());
      break;
    case `twoImages`:
      render.switchScreens(firstGame.screen());
      break;
    case `threeImages`:
      render.switchScreens(thirdGame.screen());
      break;
  }
}

// функция обработки перехода к следующему вопросу

export function nextQuestion() {
  dcs.question++;
  if (dcs.question < 10) {
    renderCurrentQuestion();
  } else {
    youWin();
  }
}

// функция проверки правильности ответа

export function checkAnswer(evt) {
  switch (questions[dcs.question].mode) {
    case `oneImage`:
      let modeOneQuestion = document.querySelector(`input[name=question1]:checked`);
      if (modeOneQuestion.value === questions[dcs.question].params[0].type) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
      break;
    case `twoImages`:
      let question1 = document.querySelector(`input[name=question1]:checked`);
      let question2 = document.querySelector(`input[name=question2]:checked`);
      if (question1.value === questions[dcs.question].params[0].type && question2.value === questions[dcs.question].params[1].type) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
      break;
    case `threeImages`:
      let [...questionsArr] = document.querySelectorAll(`.game__option`);
      let paint = questions[dcs.question].params.findIndex((val) => val.type === `paint`);
      if (evt.target === questionsArr[paint]) {
        rightAnswer();
      } else {
        wrongAnswer();
      }
      break;
  }
}

// функция проверки возможности продолжать игру

function checkLives() {
  if (dcs.lives > 0) {
    nextQuestion();
  } else {
    youLose();
  }
}

// функция обработки неверного ответа

function wrongAnswer() {
  dcs.lives--;
  dcs.stats.answers[dcs.question] = `wrong`;
  checkLives();
}

// функция обработки верного ответа

function rightAnswer() {
  if (dcs.time > 20) {
    dcs.stats.answers[dcs.question] = `fast`;
    dcs.stats.speedBonus.count++;
  } else if (dcs.time <= 20 && dcs.time >= 10) {
    dcs.stats.answers[dcs.question] = `correct`;
  } else if (dcs.time < 10) {
    dcs.stats.answers[dcs.question] = `slow`;
    dcs.stats.slowPenalty.count++;
  }
  dcs.stats.rightAnswers++;
  nextQuestion();
}

// функция обработки победы

function youWin() {
  dcs.stats.result = `Победа!`;
  countPoints();
  refreshStat();
}

// функция обработки поражения

function youLose() {
  dcs.stats.result = `FAIL`;
  dcs.stats.totalScore = `FAIL`;
  refreshStat();
}

// функция обновления статистики

function refreshStat() {
  data.statistic.unshift(dcs.stats);
  if (data.statistic.length > 3) {
    data.statistic.length = 3;
  }
  render.switchScreens(finalStats.screen());
  dcs = JSON.parse(JSON.stringify(data.initialState));
}

function countPoints() {
  let correct = dcs.stats.score = dcs.stats.rightAnswers * data.points.CORRECT; // correct answers
  let fast = dcs.stats.speedBonus.points = dcs.stats.speedBonus.count * data.points.FAST; // fast bonus
  let slow = dcs.stats.slowPenalty.points = dcs.stats.slowPenalty.points * data.points.SLOW; // slow penalty
  dcs.stats.livesBonus.count = dcs.lives;
  let live = dcs.stats.livesBonus.points = dcs.stats.livesBonus.count * data.points.LIVES; // lives bonus
  let totalPoints = dcs.stats.totalScore = correct + fast + slow + live;
  return totalPoints;
}
