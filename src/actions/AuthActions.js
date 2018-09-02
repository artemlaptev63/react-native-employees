import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from "./actionTypes";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = (email, password) => async dispatch => {
  dispatch({
    type: LOGIN_USER_START
  });
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    loginUserSuccess(dispatch, user);
  } catch (err) {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      loginUserSuccess(dispatch, user);
    } catch (err) {
      loginUserFail(dispatch);
    }
  }
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};
