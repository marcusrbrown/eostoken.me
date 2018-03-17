import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const preloadedState =
  typeof window === 'object' ? window.__PRELOADED_STATE__ : {};

if (typeof window === 'object') {
  delete window.__PRELOADED_STATE__;
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const ensureFSAMiddleware = require('@meadow/redux-ensure-fsa').default;

  middleware = [...middleware, ensureFSAMiddleware()];
}

export default createStore(
  combineReducers(reducers),
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware))
);
