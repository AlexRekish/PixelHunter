// import * as intro from './modules/intro';
// import * as stats from './modules/stats';
// import * as utils from './utils';
export const main = document.querySelector(`.central`);

// функция отрисовки шаблона на странице

export function switchScreens(template) {
  main.innerHTML = ``;
  main.appendChild(template);
}

