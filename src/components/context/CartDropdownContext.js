import { createContext, useState } from 'react';

const initCartDropdownContext = {
  show: false,
  setShow: () => null,
};

const  CartDropdowncontext = createContext(initCartDropdownContext);

export const CartDropdownProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <CartDropdowncontext.Provider value={{ show, setShow }}>
      {children}
    </CartDropdowncontext.Provider>
  );
};

export default CartDropdowncontext;
