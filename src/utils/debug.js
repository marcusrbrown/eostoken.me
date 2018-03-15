const rootNamespace = 'eostoken.me';

const nodebug = () => {};

export default (namespace) =>
  process.env.NODE_ENV === 'development'
    ? require('debug')(`${rootNamespace}:${namespace}`)
    : nodebug;
