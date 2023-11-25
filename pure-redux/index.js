import { createStore } from 'redux';

// Create Store

const Store = createStore(reducer);

// Reducer function

function reducer (state= {amount:1},action){
    return state;
}

// Access global state

console.log(Store.getState());