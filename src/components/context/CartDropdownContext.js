import { createContext, useState } from 'react';

const initCartDropdownContext = {
  isCartOpen: false,
  setIsCartOpen: () => null,
};

const CartDropdowncontext = createContext(initCartDropdownContext);

export const CartDropdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <CartDropdowncontext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartDropdowncontext.Provider>
  );
};

export default CartDropdowncontext;
