import {headerPresenter} from './presenters/HeaderPresenter';

export const main = document.querySelector(`.central`);

// функция отрисовки шаблона на странице

export function switchScreens(template, currentHeader) {
  main.innerHTML = ``;
  if (currentHeader) {
    main.appendChild(currentHeader);
  }
  main.appendChild(template);
}

export function refreshHeader() {
  main.replaceChild(headerPresenter.view.element, main.firstChild);
}
