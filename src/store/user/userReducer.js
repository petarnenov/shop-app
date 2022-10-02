const INITIAL_STATE = {
  currentUser: null,
};

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'setCurrentUser',
};

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: payload,
      };
    }
    default: {
      return state;
    }
  }
};
