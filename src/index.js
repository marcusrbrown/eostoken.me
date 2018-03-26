import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'grommet/grommet.min.css';
import Root from './components/Root';
import ClientConnector from './containers/ClientConnector';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ClientConnector>
      <Root />
    </ClientConnector>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
