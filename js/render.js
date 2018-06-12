import {intro} from './modules/intro';
import {stats} from './modules/stats';
export const render = (function () {
  const main = document.querySelector(`.central`);

  function switchScreens(template) {
    main.innerHTML = ``;
    main.appendChild(template);
  }
  return {
    switchScreens,
    main
  };
})();
