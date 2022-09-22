import { createContext, useEffect, useState } from 'react';

import { updateCartItems } from './helpers';

const initCartDropdownContext = {
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  itemsCounter: 0,
};

const CartDropdownContext = createContext(initCartDropdownContext);

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCounter, setItemsCounter] = useState(0);

  useEffect(() => {
    const currentItemsCounter = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setItemsCounter(currentItemsCounter);
  }, [cartItems]);

  const addItemToCart = (itemToAdd) => {
    setCartItems(updateCartItems(cartItems, itemToAdd));
  };

  return (
    <CartDropdownContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        itemsCounter,
      }}
    >
      {children}
    </CartDropdownContext.Provider>
  );
};

export default CartDropdownContext;
