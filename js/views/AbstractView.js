export class AbstractView {
  get template() {
    // возвращает строку, содержащую разметку. Должен быть переопределен
  }

  render(template) {
    const container = document.createElement(`template`);
    // const main = document.querySelector(`.central`);
    container.innerHTML = template;
    return container.content;
  }

  bind() {
    // метод, который будет добавлять обработчики событий
  }

  get element() {
    // if (!this._element) {
    this._element = this.render(this.template);
    this.bind();
    // }
    return this._element;
  }
}
