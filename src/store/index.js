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

export default createStore(
  combineReducers(reducers),
  preloadedState,
  composeEnhancers(applyMiddleware(thunk))
);
