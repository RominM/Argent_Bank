/**
 * @typedef {import("../actions/actions").actionsTypes} actionsTypes
 */
import { initialState } from '../store/store';
import { clearStorage } from '../../service/storage';

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
         return {
            ...state,
            loggedIn: true,
            currentState: 'logged',
            token: action.payload.token,
            loader: true,
         };
      case 'LOGIN_FAILED':
         return {
            ...state,
            error: true,
            loader: false,
            currentState: 'failed',
         };
      case 'USER_PROFILE':
         return {
            ...state,
            user: payload.user,
         };
      case 'LOGOUT_ACTION':
         clearStorage();
         return initialState;

      default:
         return state;
   }
}
