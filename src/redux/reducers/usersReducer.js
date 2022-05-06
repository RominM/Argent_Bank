import { initialState } from '../store/store';
// Actions
import {
   loading,
   logginSuceed,
   logginFailure,
   logout,
   userProfile,
} from '../actions/actions';

// To dispatch
export const deletedToken = logout().type;

// REDUCER(PREVSTATE, ACTION) => NEWSTATE
export function usersReducer(state = initialState, action) {
   const { payload } = action;
   switch (action.type) {
      // if checkCredentials (if "handleSignIn" is clicked) ...
      //TODO Why 'checkCredential' could be an action ? It doesn't work like this
      // case 'checkCredentials':
      //    return {
      //       ...state,
      //       currentState: 'loading',
      //    };
      case loading().type:
         return {
            ...state,
            loader: payload,
         };
      case logginSuceed().type:
         return {
            ...state,
            loggedIn: true,
            currentState: 'logged',
            token: action.payload.token,
            loader: payload,
         };
      case logginFailure().type:
         return {
            ...state,
            error: true,
            loader: false,
         };
      case userProfile().type:
         return {
            ...state,
            user: payload.user,
            loader: false,
         };
      case logout().type:
         return initialState;

      default:
         return state;
   }
}
