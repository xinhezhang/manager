import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log('EMAIL_CHANGED');
      // must return a NEW state object
      // so the redux know that the state has been changed
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
        console.log('PASSWORD_CHANGED');
        return { ...state, password: action.payload };
    default:
      return state;
  }
};
