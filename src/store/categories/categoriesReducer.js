import { CATEGORIES_ACTION_TYPE } from './categoriesTypes.js';

const INITIAL_STATE = {
  categoriesArray: [],
};

export const categoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES: {
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
