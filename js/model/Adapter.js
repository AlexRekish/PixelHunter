export class Adapter {

  preprocess(data) {
    const [...game] = data;
    game.forEach((el) => {
      el.answers.forEach((val) => {
        if (val.type === `painting`) {
          val.type = `paint`;
        }
      });
    });
    return game;
  }

  toServer(data) {
    return data;
  }
}

const adapter = new Adapter();
export default adapter;
