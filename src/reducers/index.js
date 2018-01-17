import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

// global application state
export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
});
