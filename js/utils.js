export function getElementFromTemplate(string) {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return container.content;
}
