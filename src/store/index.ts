import { createStore, applyMiddleware, combineReducers } from 'redux';
import cart from './reducers/cart';

const rootReducer = combineReducers({
  cart,
});
const store = createStore(rootReducer);

export default store;
