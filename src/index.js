import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { configureStore } from './redux/store';
import {persistStore} from 'redux-persist';
import {persistGate} from 'redux-persist/lib/integration/react';

const store = configureStore();
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <persistGate
      persistor = {persistor}
      loading = {<div>Loading...</div>}
    >
      <App />
    </persistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
