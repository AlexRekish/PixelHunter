import * as data from './data';
import * as firstGame from './modules/game-1';
import * as secondGame from './modules/game-2';
import * as thirdGame from './modules/game-3';
import * as finalStats from './modules/finalStats';
import * as render from './render';

const questions = [];

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
  renderCurrentQuestion();
}

// функция отрисовки вопроса

function renderCurrentQuestion() {
  switch (questions[data.currentState.question].mode) {
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
  data.currentState.question++;
  if (data.currentState.question < 10) {
    renderCurrentQuestion();
  } else {
    render.switchScreens(finalStats.screen());
    data.currentState = Object.assign({}, data.initialState);
  }
}
