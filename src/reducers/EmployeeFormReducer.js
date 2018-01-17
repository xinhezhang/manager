import {
  EMPLOYEE_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // // ES5 syntax
      // const newState = {};
      // newState[action.payload.key] = action.payload.value;
      // return { ...state, newState };

      // action.payload === { key: 'name', value: 'Jane Doe' }
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
