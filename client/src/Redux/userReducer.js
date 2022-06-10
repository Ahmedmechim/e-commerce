import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionType";

let init = {
    user: null,
  };
  
  export const userReducer = (state = init, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            return {
              ...state,
              user: payload.thisUser,
            };
        case LOGOUT_SUCCESS:
            return {
              ...state,
              user: payload,
            };

      default:
        return state;
    }
  };