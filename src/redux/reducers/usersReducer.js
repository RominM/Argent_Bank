import { initialState } from '../store/store';
// Types
import {
   // CHECK_CREDENTIALS,
   loading,
   logginSuceed,
   logginFailure,
   logout,
   userData,
} from '../actions/actions';

// To dispatch
export const deletedToken = logout();
// export const loginSuceed = { type: LOGIN_SUCEED };
export const loginFailed = logginFailure();

// REDUCER(PREVSTATE, ACTION) => NEWSTATE
export function usersReducer(state = initialState, action) {
   switch (action.type) {
      // if checkCredentials (if "handleSignIn" is clicked) ...
      case 'checkCredentials':
         return {
            ...state,
            currentState: 'loading',
         };
      // if dispatch(LOGIN_SUCEED) from the checkCredentials action
      case logginSuceed:
         console.log();
         return {
            ...state,
            loggedIn: true,
            currentState: 'logged',
            token: action.payload.token,
         };
      case logout:
         return initialState;

      default:
         return state;
   }
}
