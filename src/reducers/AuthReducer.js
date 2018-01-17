import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
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
    case LOGIN_USER_SUCCESS:
      // reset everything
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      // could add { password: '' } to clear field for secuity purpose
      return { ...state, error: 'Authentication Failed', password: '', loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
