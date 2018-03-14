export default class PromiseCallback {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.cb = (err, result) => err ? reject(err) : resolve(result);
    });
  }
}
