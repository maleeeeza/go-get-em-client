import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TopNav from './components/top-nav';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
  <Provider store={store}>
    <TopNav />
  </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
