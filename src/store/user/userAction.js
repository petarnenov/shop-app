import { createAction } from '../../utils/actions/actionCreator';
import { USER_ACTION_TYPES } from './userReducer';

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
