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
    default:
      return state;
  }
};

export default cartReducers;
