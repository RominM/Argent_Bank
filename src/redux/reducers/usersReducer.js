import { initialState } from '../store/store';
// Types
import { LOGIN_FAILED, LOGIN_SUCEED, LOGOUT_ACTION } from '../actions/actions';

// To dispatch
export const deletedToken = { type: LOGOUT_ACTION };
export const loginSuceed = { type: LOGIN_SUCEED };
export const loginFailed = { type: LOGIN_FAILED };

// REDUCER(PREVSTATE, ACTION) => NEWSTATE
export function usersReducer(state = initialState, action) {
  switch (action.type) {
    // if checkCredentials (if "handleSignIn" is clicked) ...
    case 'checkCredentials': // TODO How is possible ?
      return {
        //...change currentState by 'loading'
        ...state,
        currentState: 'loading',
      };
    // if dispatch(LOGIN_SUCEED) from the checkCredentials action
    case LOGIN_SUCEED:
      return {
        ...state,
        loggedIn: true,
        currentState: 'logged',
        token: action.payload.token,
      };
    case LOGOUT_ACTION:
      return initialState;

    default:
      return state;
  }
}
