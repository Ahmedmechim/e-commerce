import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, LOGOUT, LOGOUT_FAIL, LOGOUT_SUCCESS } from "./actionType";

let init = {
  isLoading: true,
  isError: false,
};

export const anyReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
    case LOGOUT:
      return { ...state, isLoading: true, isError: false };
      case GET_PRODUCT_SUCCESS:
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };
    case GET_PRODUCT_FAIL:
    case LOGOUT_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
