import { produce } from 'immer';
import { SIGN_IN_ACTION, SIGN_OUT_ACTION } from '../actions/actions';

import { initialState } from '../store/store';

// To dispatch
export const saveToken = (token) => ({ type: SIGN_IN_ACTION, payload: token });
export const deletedToken = { type: SIGN_OUT_ACTION };

// REDUCER(STATE, ACTION) Actions will change State
export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "checkCredentials" : 
    return {
      ...state,
      currentState: "loading",
    };
    case "loginSuceed" : 
      return {
        ...state,
        loggedIn:true,
        currentState: "logged",
        token : action.payload.token
      }
    case SIGN_IN_ACTION:
      console.log('SignIn Action');
      return produce(state, (draftState) => {
        draftState.token = action.payload;
      });
    case SIGN_OUT_ACTION:
      return initialState;

    default:
      return state;
  }
}
