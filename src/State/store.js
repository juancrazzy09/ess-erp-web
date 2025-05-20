import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';  
import dropdownReducer from './OnlineApplication/Reducer';
import loginformReducer from './AuthState/Reducer';
import admissionReducer from './AdmissionState/Reducer';

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
  login: loginformReducer,
  admission: admissionReducer,
  
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
