import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'grommet/grommet.min.css';
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
