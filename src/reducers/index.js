import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

// global application state
export default combineReducers({
  auth: AuthReducer,
});
