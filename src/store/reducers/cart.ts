import { AnyAction } from 'redux';
import { ACTIONS } from '../../utils/constants';
import { CartState } from '../typings';

type intialStateType = {
  cart: CartState | {};
};

const initialState: intialStateType = {
  cart: {},
};

export default (state = initialState, action: AnyAction): CartState | {} => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      const productsAddedToCart = { ...state.cart };
      if (productsAddedToCart[action.payload.id] === undefined) {
        productsAddedToCart[action.payload.id] = action.payload;
        productsAddedToCart[action.payload.id].total = 1;
      } else {
        productsAddedToCart[action.payload.id].total += 1;
      }
      return {
        ...state,
        cart: productsAddedToCart,
      };
    case ACTIONS.DELETE_FROM_CART:
      const productId = action.productId;
      const cartItems = { ...state.cart };
      if (cartItems[productId]) {
        if (cartItems[productId].total > 1) {
          cartItems[productId].total -= 1;
        } else {
          delete cartItems[productId];
        }
      }

      return {
        ...state,
        cart: cartItems,
      };
    default:
      return state;
  }
};
