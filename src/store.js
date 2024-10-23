import { createStore } from 'redux';
import shoppingReducer from './shoppingReducer';

const store = createStore(shoppingReducer);

export default store;
