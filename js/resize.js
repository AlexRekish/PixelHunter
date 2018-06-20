// функция для кадрирования изображений под размеры контейнера

export function setPicturesSizes() {
  let game = document.querySelector(`.game`);
  let [...pictures] = game.querySelectorAll(`img`);
  pictures.forEach((el) => {
    el.style.objectFit = `contain`;
  });
}

// функция для задания с тестом. Решение с обжект-фитом на мой взгляд короче и оптимальнее, т.к. поддержка ИЕ не требуется, а в остальных браузерах это свойство нормально поддерживается

export function resize(frame, natural) {
  let multiplier = 0;
  if (natural.width > natural.height) {
    multiplier = frame.width / natural.width;
  } else if ((natural.width < natural.height) || (natural.width === natural.height)) {
    multiplier = frame.height / natural.height;
  }
  return {
    width: Math.floor(natural.width * multiplier),
    height: Math.floor(natural.height * multiplier)
  };
}


// реализация ресайза через изменение свойств width и height

// el.onload = () => {
//   let picturesSizes = pictures.map((val) => {
//     let frame = {
//       width: val.width,
//       height: val.height
//     };
//     let natural = {
//       width: val.naturalWidth,
//       height: val.naturalHeight
//     };
//     return resize(frame, natural);
//   });
//   if (picturesSizes[i].width > picturesSizes[i].height) {
//     el.width = picturesSizes[i].width;
//     el.height = picturesSizes[i].height;
//   } else {
//     el.style.objectFit = `cover`;
//   }
// };
