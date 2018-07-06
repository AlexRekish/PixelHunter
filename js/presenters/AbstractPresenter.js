// import {app} from '../Application';

export default class AbstractPresenter {
  constructor(view) {
    this.view = view;
  }

  get main() {
    return document.querySelector(`.central`);
  }

  listener() {
    throw new Error(`Must be overload!`);
  }

  switchScreens(template, currentHeader) {
    this.main.innerHTML = ``;
    if (currentHeader) {
      this.main.appendChild(currentHeader);
    }
    this.main.appendChild(template);
  }

  init() {
    this.listener();
    this.switchScreens(this.view.element);
  }
}
