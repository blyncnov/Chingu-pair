import { ADD__TO__CART } from "../actions/action";

const InitialState = {
  cart: [],
};

export const cartReducers = (state = InitialState, action) => {
  switch (action.type) {
    case ADD__TO__CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "INCREASE__QTY":
      return {
        ...state,
        Qty: state.cart.find((item) => {
          const FiVgall = item.id === action.payload;
          return console.log(FiVgall);
        }),
      };
    case "REMOVE__FROM__CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducers;
