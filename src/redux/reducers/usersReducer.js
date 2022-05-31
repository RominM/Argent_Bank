/**
 * @typedef {import("../actions/actions").actionsTypes} actionsTypes
 */
import { initialState } from '../store/store';
import { clearStorage } from '../../service/storage';
import { setBearer } from '../../service/service';

/**
 *
 * @param {Object} state
 * @param {Object} action
 * @param {Object} action.payload
 * @param {actionsTypes} action.type
 * @returns
 */

export function usersReducer(state = initialState, action) {
   const { payload } = action;
   switch (action.type) {
      case 'LOADING_IN_PROGRESS':
         return {
            ...state,
            currentState: 'loading',
            loader: payload,
         };
      case 'LOGIN_SUCEED':
         setBearer(action.payload.token);
         return {
            ...state,
            loggedIn: true,
            token: action.payload.token,
            currentState: 'logged',
            loader: true,
         };
      case 'USER_PROFILE':
         return {
            ...state,
            user: payload.user,
            loader: false,
         };
      case 'SAVE_SUCCEED':
         return {
            ...state,
            user: {
               ...state.user,
               ...payload.user,
            },
         };
      case 'LOGIN_FAILED':
         return {
            ...state,
            error: true,
            loader: false,
            currentState: 'failed',
         };
      case 'LOGOUT_ACTION':
         clearStorage();
         return initialState;
      default:
         return state;
   }
}
