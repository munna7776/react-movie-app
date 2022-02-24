import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//middleware
// const logger = ({dispatch, getState}) =>{
//   return (next) => {
//     return (action) => {
//       console.log(action.type)
//       next(action)
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) => {
  if(typeof action !== 'function') {
    console.log(action.type)
  }
  next(action)
}

// inspite of creating thunk function , import thunk from redux-thunk package & both will behave in the same way/
// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   if(typeof action === 'function') {
//     action(dispatch)
//     return ;
//   }
//   next(action)
// }

let store = createStore(rootReducer, applyMiddleware(logger,thunk));

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

