import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  location: '',
};
const middleware = [thunk];
const reducers = combineReducers({});
const store = createStore(
  initialState,
  reducers,
  applyMiddleware(...middleware)
);

export default store;
