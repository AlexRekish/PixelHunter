import adapter from './Adapter';

export default class Model {
  get urlRead() {
    throw new Error(`Must be overload`);
  }

  get urlWrite() {
    throw new Error(`Must be overload`);
  }

  loadQuestions(adapt = adapter) {
    return fetch(this.urlRead)
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        }
        throw new Error(`Server responded with error`);
      })
      .then(adapt.preprocess)
      .catch((err) => window.console.warn(err));
  }

  loadStat(adapt = adapter) {
    return fetch(this.urlWrite)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error(`Server responded with error`);
      })
      .then(adapt.preprocessStat)
      .catch((err) => window.console.warn(err));
  }

  sendStat(data, adapt = adapter) {
    const requestSettings = {
      body: adapt.toServer(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(this.urlWrite, requestSettings);
  }
}
