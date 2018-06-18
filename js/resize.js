export function getPicturesSizes() {
  let game = document.querySelector(`.game`);
  let [...pictures] = game.querySelectorAll(`img`);
  pictures.forEach((el, i) => {
    el.onload = () => {
      let picturesSizes = pictures.map((val) => {
        let frame = {
          width: val.width,
          height: val.height
        };
        let natural = {
          width: val.naturalWidth,
          height: val.naturalHeight
        };
        return resize(frame, natural);
      });
      el.width = picturesSizes[i].width;
      el.height = picturesSizes[i].height;
    };
  });
}

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

// function checkPicturesLoad(val) {
//   let resizedPicture;
//   val.onload = () => {
//     let frame = {
//       width: val.width,
//       height: val.height
//     };
//     let natural = {
//       width: val.naturalWidth,
//       height: val.naturalHeight
//     };
//     resizedPicture = resize(frame, natural);
//   };
//   return resizedPicture;
// }


// (val) => {
//   let frame = {
//     width: val.width,
//     height: val.height
//   };
//   let natural = {
//     width: val.naturalWidth,
//     height: val.naturalHeight
//   };
//   return resize(frame, natural);
// });
