// Global constants that don't belong anywhere else.

export default {
  web3: {
    status: {
      INITIALIZING: 'initializing',
      READY: 'ready',
      ERROR: 'error'
    },

    networkIdToIdentifier: (networkId) => {
      switch (String(networkId)) {
        case '1':
          return 'mainnet';

        case '2':
          return 'morden';

        case '3':
          return 'ropsten';

        case '4':
          return 'rinkleby';

        case '42':
          return 'kovan';

        default:
          return String(networkId);
      }
    }
  }
};
