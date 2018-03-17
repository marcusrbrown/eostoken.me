import { actionTypes } from '../../actions';
import constants from '../../constants';

const initialState = {
  status: ''
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.clients.web3.INITIALIZE:
      return { ...state, status: constants.web3.status.INITIALIZING };

    case actionTypes.clients.web3.SET_READY:
      return { ...state, status: constants.web3.status.READY };

    case actionTypes.clients.web3.SET_NETWORK_ID:
      return { ...state, networkId: payload };

    default:
      return state;
  }
};
