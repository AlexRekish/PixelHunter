import {statsPresenter} from '../presenters/StatsPresenter';
export class Adapter {

  // приведение списка вопросов с сервера к модели

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

  // приведение статистики с сервера к модели

  preprocessStat(data) {
    return data.map((val) => statsPresenter.getStatUnitFromDownload(val));
  }

  // обработка статистики для отправки на сервер

  toServer(data) {
    return JSON.stringify(data);
  }
}

const adapter = new Adapter();
export default adapter;
