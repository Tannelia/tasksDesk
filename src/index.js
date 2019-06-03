import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App/App.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers.js'
import './index.css';


const store = createStore(rootReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

