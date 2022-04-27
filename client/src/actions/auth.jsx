import { AUTH } from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //login in the user
    const { data } = await api.signIn(formData);
    console.log(formData);

    dispatch({ type: AUTH, data });
    //history to navigate
    history.push("/");
  } catch (e) {
    console.log(e);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //sign up the user
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (e) {
    console.log(e);
  }
};
