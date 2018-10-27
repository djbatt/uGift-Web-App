import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export default store;

// const createStore = (reducer) => { // implement store from scratch
//     let state;

//     let listeners = [];

//     const getState = () => state;

//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach(listener => listener())
//     };

//     const subscribe = (listener) => {
//         listeners.push(listener);

//         return () => {
//             listeners = listeners.filter(l => l !== listener);
//         }
//     }

//     dispatch({});

//     return { getState, dispatch, subscribe };
// }


// console.log(store.getState()) returns the state

// store.dispatch({type: 'ADD_BUSINESS'}) dispatches an action to change the state

// store.subscribe(() => { store.subscribe is a function that takes a callback functio
//     function() the call back function is ran everytime that an action is dispatched
// })