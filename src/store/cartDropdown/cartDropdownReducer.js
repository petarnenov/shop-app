import { CART_DROP_DOWN_ACTION_TYPES } from './cartDropdownTypes';
import { addCartItem, removeCartItem, removeProduct } from './helpers/helpers';

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemsCounter: 0,
  total: 0,
};

export const cartDropdownReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case CART_DROP_DOWN_ACTION_TYPES.SET_IS_CART_OPEN: {
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    }
    case CART_DROP_DOWN_ACTION_TYPES.ADD_CART_ITEM: {
      return {
        ...state,
        ...addCartItem(state.cartItems, payload),
      };
    }
    case CART_DROP_DOWN_ACTION_TYPES.REMOVE_CART_ITEM: {
      return {
        ...state,
        ...removeCartItem(state.cartItems, payload),
      };
    }
    case CART_DROP_DOWN_ACTION_TYPES.REMOVE_CART_PRODUCT: {
      return {
        ...state,
        ...removeProduct(state.cartItems, payload),
      };
    }
    default: {
      return state;
    }
  }
};
