import { ADD_ITEM, GET_PRODUCT_SUCCESS, DELETE_ITEM, GET_CATEGORIE_SUCCESS } from "./actionType";

let init = {
    allProducts: [],
    shoppingCart:[],
    categories:[]
  };
  
  export const prductReducer = (state = init, { type, payload }) => {
    switch (type) {
      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          allProducts: payload
        };
        case ADD_ITEM:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart,{id:payload.id,
          name:payload.name,
          image:payload.image,
          quantity:payload.quantity,
          prix:payload.prix,
          seller:payload.seller} ],
      };
      case DELETE_ITEM :
            
            return{
            ...state, shoppingCart: state.shoppingCart.filter(el=>el.id!==payload)
            };
            case GET_CATEGORIE_SUCCESS:
              return {
                ...state,
                categories: payload,
                loading: false,
                errors: null,
              };
  
      default:
        return state;
    }
  };