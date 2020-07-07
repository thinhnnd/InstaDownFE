import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import authReducer from './authReducer';
//import userReducer from './userReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    auth: authReducer,
   // user: userReducer,
});

export default rootReducer;