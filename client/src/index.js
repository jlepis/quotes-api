import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.css'
import './index.css';
import 'react-notifications/lib/notifications.css';

const store = configureStore();

const run = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
};

window.addEventListener('DOMContentLoaded', run);
