import to from 'await-to-js';
import actionTypes from './actionTypes';
import constants from '../constants';
import { PromiseCallback } from '../utils';

const setError = error => ({
  type: actionTypes.clients.web3.SET_ERROR,
  payload: error,
  error: true
});

const getNetworkId = (web3) => async (dispatch) => {
  const callback = new PromiseCallback();
  let err, networkId;

  web3.version.getNetwork(callback.cb);
  [err, networkId] = await to(callback.promise);

  if (err) {
    dispatch(setError(err));
    return;
  }

  dispatch({
    type: actionTypes.clients.web3.SET_NETWORK_ID,
    payload: constants.web3.networkIdToIdentifier(networkId)
  });
};

const initialize = (web3) => async (dispatch) => {
  dispatch({ type: actionTypes.clients.web3.INITIALIZE });

  const promises = [
    getNetworkId(web3)
  ];
  let [err] = await to(Promise.all(promises.map(p => dispatch(p))));

  if (err) {
    dispatch(setError(err));
    return;
  }

  dispatch({ type: actionTypes.clients.web3.SET_READY });
};

export default {
  web3: {
    initialize,
    setError,
    getNetworkId
  }
};
