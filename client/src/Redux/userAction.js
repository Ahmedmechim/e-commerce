import axios from "axios";
import { Navigate } from "react-router-dom";
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAIL, LOGOUT_SUCCESS, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from "./actionType";

export const userLogin = (user) => async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
      let res = await axios.post("/user/login", user);
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const userSignUp = (newUser) => async (dispatch) => {
    dispatch({ type: SIGNUP });
    try {
      const res = await axios.post("/user/signUp", newUser);
      console.log("res", res.data);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
      <Navigate to="/login" />;
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error.response.data,
      });
    }
  };
  export const logOut = () => async (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
    try {
        localStorage.removeItem("token")
        dispatch({
          type: LOGOUT_SUCCESS,
          payload: null,
        });
      } catch (error) {
        dispatch({
          type: LOGOUT_FAIL,
        });
      }
  };