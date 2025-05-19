import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';  
import dropdownReducer from './OnlineApplication/Reducer';

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
