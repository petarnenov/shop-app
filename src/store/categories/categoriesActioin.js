import { createAction } from '../../utils/actions/actionCreator';
import { CATEGORIES_ACTION_TYPE } from './categoriesTypes';

export const setCategoriesArray = (categories) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories);
