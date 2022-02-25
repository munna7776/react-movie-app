import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

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

// export const StoreContext = createContext();

// ***************************************
// <Provider > </Provider> from react-redux  will behave in the same way as below Provider class component
// class Provider extends React.Component{
//   render(){
//     const {store} = this.props;
//     return (
//       <StoreContext.Provider value={store}>{this.props.children}</StoreContext.Provider>
//     );
//   }
// }

// ***************************************
// The connect function from react-redux  will behave in the same way as below connect function
// connect function to connect components in react
// export function connect(callback) {
//   return function(Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(()=>{
//           this.forceUpdate();
//         })
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const {store} = this.props;
//         const state = store.getState();
//         const dataTBePassedAsProps = callback(state);
//         return <Component {...dataTBePassedAsProps} dispatch={store.dispatch} />
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {
//               (store) => {
//                 return <ConnectedComponent store = {store} />
//               }
//             }
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
// }




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

