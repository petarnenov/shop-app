import { createContext, useEffect, useState } from 'react';

import {
  onAuthStateChangedListener,
  createUserAuthDoc,
} from '../../utils/firebase/firebase';

const initUserContext = {
  currentUser: null,
  setCurrentUser: () => null,
};

const UserContext = createContext(initUserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsibscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserAuthDoc(user);
      }
      setCurrentUser(user);
    });
    return unsibscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
