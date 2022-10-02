import { USER_ACTION_TYPES } from './userTypes';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.SIGN_IM_SUCCESS: {
      return {
        ...state,
        currentUser: payload,
      };
    }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS: {
      return {
        ...state,
        currentUser: null,
      };
    }
    case USER_ACTION_TYPES.SIGN_OUT_FAIL:
    case USER_ACTION_TYPES.SIGN_IN_FAIL: {
      return {
        ...state,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
