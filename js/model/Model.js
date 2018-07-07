import adapter from './Adapter';

export default class Model {
  get urlRead() {
    throw new Error(`Must be overload`);
  }
  get urlWrite() {
    throw new Error(`Must be overload`);
  }

  load(adapt = adapter) {
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
}
