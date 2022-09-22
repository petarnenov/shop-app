import { createContext, useEffect, useState } from 'react';

import { addCartItem, removeCartItem, removeProduct } from './helpers';

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

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsCounter, setItemsCounter] = useState(0);
  const [total, setTotal] = useState(0);

  const toggleCartOpen = () => setIsCartOpen((prev) => !prev);

  useEffect(() => {
    const currentItemsCounter = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    const currentTotal = cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setItemsCounter(currentItemsCounter);
    setTotal(currentTotal);
  }, [cartItems]);

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
        toggleCartOpen
      }}
    >
      {children}
    </CartDropdownContext.Provider>
  );
};

export default CartDropdownContext;
