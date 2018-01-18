import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',  // TODO
  password: '',     // TODO
  user: null,
  error: '',
  message: '',  // signup success message
  signupLoading: false,
  loginLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      // must return a NEW state object
      // so the redux know that the state has been changed
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGNUP_USER_SUCCESS:
      // reset everything
      return { ...state, ...INITIAL_STATE, message: 'Account Creation Success', email: action.payload.email };
    case SIGNUP_USER_FAIL:
      return { ...state, error: 'Account Creation Failed', email: '', password: '', signupLoading: false };
    case SIGNUP_USER:
      return { ...state, signupLoading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      // reset everything
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      // could add { password: '' } to clear field for secuity purpose
      return { ...state, error: 'Authentication Failed', password: '', loginLoading: false };
    case LOGIN_USER:
      return { ...state, loginLoading: true, error: '' };
    default:
      return state;
  }
};
