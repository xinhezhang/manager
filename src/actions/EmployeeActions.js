import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
} from './types';

export const employeeUpdate = ({ key, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { key, value },
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  // pretend using redux-thunk (return a function)
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => Actions.main({ type: 'reset' }));
  };
};
