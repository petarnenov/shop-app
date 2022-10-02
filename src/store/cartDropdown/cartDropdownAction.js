import { createAction } from '../../utils/actions/actionCreator';
import { CART_DROP_DOWN_ACTION_TYPES } from './cartDropdownTypes';

export const setIsCartOpen = () =>
  createAction(CART_DROP_DOWN_ACTION_TYPES.SET_IS_CART_OPEN);

export const addItemToCart = (item) =>
  createAction(CART_DROP_DOWN_ACTION_TYPES.ADD_CART_ITEM, item);

export const removeItemFromCart = (item) =>
  createAction(CART_DROP_DOWN_ACTION_TYPES.REMOVE_CART_ITEM, item);

export const removeProductFromCart = (product) =>
  createAction(CART_DROP_DOWN_ACTION_TYPES.REMOVE_CART_PRODUCT, product);
