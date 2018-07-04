export default class AbstractPresenter {
  constructor(view) {
    this.view = view;
  }

  listener() {
    throw new Error(`Must be overload!`);
  }
}
