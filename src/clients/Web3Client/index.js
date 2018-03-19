import mitt from 'mitt';
import to from 'await-to-js';
import web3Loader from './web3';

export default class Web3Client {
  constructor() {
    this.web3 = null;
    Object.assign(this, mitt());
  }

  subscribe = (type, handler) => {
    this.on(type, handler);
    return () => this.off(type, handler);
  }

  connect = async () => {
    if (this.web3) {
      return;
    }

    let err;

    [err, this.web3] = await to(web3Loader);

    if (err) {
      this.emit('error', err);
      return;
    }

    this.emit('connect', this.web3);
  }
}
