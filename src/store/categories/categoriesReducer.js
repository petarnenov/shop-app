import { CATEGORIES_ACTION_TYPE } from './categoriesTypes.js';

const INITIAL_STATE = {
  categoriesArray: [],
};

export const categoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categoriesArray: payload,
      };
    }
    default: {
      return state;
    }
  }
};
