import {
  EMPLOYEES_FETCH_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      // action.payload ===
      // {
      //   uid1: { name: "Jane Doe", phone: "999-999-9999", shift: "Monday" },
      //   uid2: { ... },
      //   ...
      // }
      return action.payload;
    default:
      return state;
  }
};
