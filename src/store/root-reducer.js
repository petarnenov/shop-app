import { combineReducers } from 'redux';
import { cartDropdownReducer } from './cartDropdown/cartDropdownReducer';
import { categoriesReducer } from './categories/categoriesReducer';
import { userReducer } from './user/userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cartDropdown: cartDropdownReducer,
});
