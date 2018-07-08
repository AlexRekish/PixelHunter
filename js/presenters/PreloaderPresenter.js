import AbstractPresenter from "./AbstractPresenter";
import PreloaderView from "../views/PreloaderView";

class PreloaderPresenter extends AbstractPresenter {
  constructor() {
    super(new PreloaderView());
  }

  listener() {
    //
  }
}

const preloaderPresenter = new PreloaderPresenter();
export default preloaderPresenter;
