import * as data from '../data';

export const gameStats = (currentState) => `
  <ul class="stats">
    ${new Array(data.NUMBER_OF_QUESTION).fill().map((val, i) => `<li class="stats__result stats__result--${currentState[i]}"></li>`).join(``)}
  </ul>`.trim();
