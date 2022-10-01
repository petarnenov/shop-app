import { createContext, useEffect, useReducer } from 'react';

import {
  onAuthStateChangedListener,
  createUserAuthDoc,
} from '../../utils/firebase/firebase';
import { createAction } from './helpers';

const initUserContext = {
  currentUser: null,
  setCurrentUser: () => null,
};

const UserContext = createContext(initUserContext);

const INITIAL_STATE = {
  currentUser: null,
};

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'setCurrentUser',
};

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: payload,
      };
    }
    default: {
      throw Error(`Unhandle type ${type} in userReducer`);
    }
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

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
