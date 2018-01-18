import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

// action creator returns a object
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const signupUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: SIGNUP_USER,
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => signupUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        signupUserFail(dispatch);
      });
  };
};

const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: user,
  });

  //Actions.auth({ type: 'reset' });
};

const signupUserFail = (dispatch) => {
  dispatch({
    type: SIGNUP_USER_FAIL,
  });
};

// action creator returns a function (by using redux-thunk)
// used for "Async" actions
// dispatch: a function, it allows manually send action to all the reducers
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        loginUserFail(dispatch);
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  // goto main (EmployeeList, EmployeeCreate, ...) page
  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};

// export const logoutUser = () => {
//   return (dispatch) => {
//     firebase.auth().signOut()
//       .then(() => {
//         dispatch({
//           type: LOGOUT_USER,
//         });
//         Actions.auth({ type: 'reset' });
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
// };
