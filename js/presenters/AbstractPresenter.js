export default class AbstractPresenter {
  constructor(view) {
    this.view = view;
  }

  listener() {
    throw Error(`Must be overload!`);
  }
}
