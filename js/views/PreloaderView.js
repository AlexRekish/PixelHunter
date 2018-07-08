import {AbstractView} from "./AbstractView";

export default class PreloaderView extends AbstractView {
  get template() {
    return `
      <div class="container">
        <div class="item-1"></div>
        <div class="item-2"></div>
        <div class="item-3"></div>
        <div class="item-4"></div>
        <div class="item-5"></div>
      </div>`.trim();
  }
}
