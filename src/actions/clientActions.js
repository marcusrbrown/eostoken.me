import actionTypes from './actionTypes';

const initialize = (web3) => (dispatch) => {
  dispatch({ type: actionTypes.clients.web3.INITIALIZE });
};

export default {
  web3: {
    initialize
  }
};
