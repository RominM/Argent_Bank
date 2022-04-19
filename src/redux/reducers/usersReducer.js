import { produce } from "immer";
import { SIGN_IN_ACTION, SIGN_OUT_ACTION } from "../actions/actions";

const initialState = {
   token: null
};

// To dispatch
export const saveToken = (token) => ({type: SIGN_IN_ACTION, payload: token}); // return action
export const deletedToken = {type: SIGN_OUT_ACTION}

// REDUCER(STATE, ACTION) Actions will change State
export function usersReducer(state = initialState, action) {
   switch (action.type) {
      case SIGN_IN_ACTION: 
      return produce(state, draftState => {
         draftState.token = action.payload
      })
      case SIGN_OUT_ACTION: 
         return {
            ...state,
            token: null
         }
      default:
      return state
   } 
};

