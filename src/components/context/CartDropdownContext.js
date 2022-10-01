import { createContext, useReducer } from 'react';

import {
  addCartItem,
  createAction,
  removeCartItem,
  removeProduct,
} from './helpers';

const initCartDropdownContext = {
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  itemsCounter: 0,
  total: 0,
  setTotal: () => null,
  toggleCartOpen: () => null,
};

const CartDropdownContext = createContext(initCartDropdownContext);

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemsCounter: 0,
  total: 0,
};

export const CART_DROPDOWN_ACTION_TYPES = {
  TOGGLE_OPEN_CART: 'toggleOpenCart',
  SET_CART_ITEMS: 'setCartItems',
};

export const cartDropdownReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_DROPDOWN_ACTION_TYPES.TOGGLE_OPEN_CART: {
      return {
        ...state,
        isCartOpen: payload,
      };
    }
    case CART_DROPDOWN_ACTION_TYPES.SET_CART_ITEMS: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      throw Error(`Unhandled ${type} in cartDropdownReducer`);
    }
  }
};

export const CartDropdownProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, itemsCounter, total }, dispatch] = useReducer(
    cartDropdownReducer,
    INITIAL_STATE
  );

  const setIsCartOpen = (isCartOpen) =>
    dispatch(
      createAction(CART_DROPDOWN_ACTION_TYPES.TOGGLE_OPEN_CART, isCartOpen)
    );

  const setCartItems = ({ cartItems, total, itemsCounter }) => {
    dispatch(
      createAction(CART_DROPDOWN_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems,
        itemsCounter,
        total,
      })
    );
  };

  const toggleCartOpen = () => setIsCartOpen(!isCartOpen);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const removeProductFromCart = (productToRemove) => {
    setCartItems(removeProduct(cartItems, productToRemove));
  };

  return (
    <CartDropdownContext.Provider
      value={{
        isCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        removeProductFromCart,
        itemsCounter,
        total,
        toggleCartOpen,
      }}
    >
      {children}
    </CartDropdownContext.Provider>
  );
};

export default CartDropdownContext;
