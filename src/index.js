import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AdoptAPet from './components/AdoptAPet';
import './styles/css/main.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
  <Provider store={store}>
    <AdoptAPet />
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
