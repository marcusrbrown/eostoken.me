import { PromiseCallback } from '../utils';

const debug = require('../utils').debug('web3');

// A list of fallback providers in their preferred order.
const providers = [
  {
    'url': 'http://localhost:8545'
  },
  {
    'url': 'https://mainnet.infura.io'
  }
];

const detectProvider = async (Web3) => {
  debug('Detecting fallback provider for Web3...');

  for (let { url } of providers) {
    const web3 = new Web3(new Web3.providers.HttpProvider(url));
    const callback = new PromiseCallback();

    // Request an endpoint that should be available in all providers.
    web3.version.getNode(callback.cb);

    try {
      const node = await callback.promise;
      debug(`Web3 version ${web3.version.api} using provider '${url}' on node '${node}'`);
      return web3;
    } catch (error) {
      // Ignore errors.
    }
  }

  throw new Error('A valid Web3 provider could not be detected');
};

const promise = new Promise((resolve, reject) =>
  window.addEventListener('load', () =>
    import('web3')
      .then(Web3 => {
        let web3 = window.web3;

        if (typeof web3 !== 'undefined') {
          return new Web3(web3.currentProvider);
        }

        return detectProvider(Web3);
      })
      .then(resolve)
      .catch(reject)
  )
);


// Export a promise that resolves to an instance of Web3.
export default promise;
