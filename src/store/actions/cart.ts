import { ACTIONS } from '../../utils/constants';

export const addToCart = (payload: object) => {
  return {
    type: ACTIONS.ADD_TO_CART,
    payload,
  };
};

export const deleteFromCart = (productId: number) => {
  return {
    type: ACTIONS.DELETE_FROM_CART,
    productId,
  };
};
