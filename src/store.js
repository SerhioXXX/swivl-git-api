import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers';

const logMiddleware = ({getState, dispatch}) => (dispatch) => (action)=> {
  console.log(action.type, getState());
  return dispatch(action);
}

const stringMiddleware = (store) => (dispatch) => (action)=> {
  console.log(action.type, store.getState());
  if (typeof action === 'string'){
    return dispatch({
      type: action
    })
  }
  return dispatch(action);
}

// const stringEnhancer = (createStore) => (...args) => {
//   const store = createStore(...args);

// const originalDispatch = store.dispatch;
// store.dispatch =(action) =>{
//   if (typeof action === 'string'){
//     return originalDispatch({
//       type: action
//     })
//   }
//   return originalDispatch(action);
// }
// return store;
// }

// const logEnhancer = (createStore) => (...args) => {
//   const store = createStore(...args);

// const originalDispatch = store.dispatch;
// store.dispatch =(action) =>{
//   console.log(action.type);
//   return originalDispatch(action);
// }
// return store;
// }

// const store = createStore(reducer, compose(stringEnhancer,logEnhancer));
const store = createStore(reducer, applyMiddleware(stringMiddleware,logMiddleware));

store.dispatch('HELLO');

export default store;