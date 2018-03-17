import { createSelector } from 'reselect';
import { select as selectClients } from '.';

export const select = state => selectClients(state).web3;

export const selectStatus = createSelector(
  select,
  web3 => web3.status
);

export const selectError = createSelector(
  select,
  web3 => web3.error
);

export const selectNetworkId = createSelector(
  select,
  web3 => web3.networkId
);

export const selectAccounts = createSelector(
  select,
  web3 => web3.selectAccounts
);
