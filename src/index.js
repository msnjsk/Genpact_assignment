import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducer/root';
import { rootEpic } from './epics';

import { initializeIcons } from '@uifabric/icons';

initializeIcons();


const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

const appWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(appWithProvider, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
