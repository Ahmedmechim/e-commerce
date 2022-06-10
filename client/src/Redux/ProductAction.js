import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  GET_CATEGORIE,
  GET_CATEGORIE_SUCCESS,
  GET_CATEGORIE_FAIL,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL
} from "./actionType";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT,
  });

  try {
    let res = await axios.get("/product/getProducts");
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};

export const handelAdd = (id, name, image, quantity, prix, seller) => {
  return {
    type: ADD_ITEM,
    payload: { id, name, image, quantity, prix, seller },
  };
};

export const handelDelete = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const addProduct = (newProduct) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.post("/product/addProduct", newProduct, config);

    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: res.data,
    });
    dispatch(getProducts())
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};
export const getCategories = () => async (dispatch) => {
  dispatch({
    type: GET_CATEGORIE,
  });

  try {
    let res = await axios.get("/categorie/getCategories");
    dispatch({
      type: GET_CATEGORIE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CATEGORIE_FAIL,
      payload: error.response.data,
    });
  }
};
export const editProduct = (editProduct) => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCT });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    }
  };
  try {
    const res = await axios.put(`/product/editProduct/${editProduct.id}`,editProduct,config);
    
    dispatch({
      type: EDIT_PRODUCT_SUCCESS,
      payload: res.data,
    });
    dispatch(getProducts())
  } catch (error) {
    dispatch({
      type: EDIT_PRODUCT_FAIL,
      payload: error.response.data,
    });
  }
};
