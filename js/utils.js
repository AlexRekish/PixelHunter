export const utils = (function () {

  function getElementFromTemplate(string) {
    const container = document.createElement(`template`);
    container.innerHTML = string;
    return container.content;
  }

  return {
    getElementFromTemplate
  };
})();
