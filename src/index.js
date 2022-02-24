import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import {data} from './data';


let store = createStore(rootReducer);
console.log("Before state",store.getState())

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:data
// })
// console.log("After state",store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

