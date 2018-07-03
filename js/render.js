export const main = document.querySelector(`.central`);
import {header} from './modules/header';

// функция отрисовки шаблона на странице

export function switchScreens(template, currentHeader) {
  main.innerHTML = ``;
  if (currentHeader) {
    main.appendChild(currentHeader);
  }
  main.appendChild(template);
}

export function refreshHeader() {
  main.replaceChild(header.element, main.firstChild);
}
