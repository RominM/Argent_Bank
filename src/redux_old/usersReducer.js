import { produce } from "immer";

const initialState = {
   token: null
};

//const token = useSelector(state => state.token) (accedé au token)
// private routes / routes protégées avec react-router
// je peux accéder à la page profil si un token non null existe dans le store

// ACTION TO SAVE TOKEN IN REDUX #1
const SIGN_IN_ACTION = "SIGN_IN_ACTION";
export const saveToken = (token) => ({type: SIGN_IN_ACTION, payload: token}); // return action

// ACTION TO DELET TOKEN
const SIGN_OUT_ACTION = "SIGN_OUT_ACTION";
export const deletedToken = {type: SIGN_OUT_ACTION}

// REDUCER(STATE, ACTION) Action will change State
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


/*
const initialState = {
   status: "void",
   auth: {
      token: null,
   },
   data: {
      id: null,
      lastName: null,
      firstName: null,
      email: null,
      password: null,
   },
   error: null,
};

const AUTHORIZED = "user/authorized";
const REJECTED = "user/rejected";

export const usersReducer = (state = initialState, action) => {
   switch (action.type){
      case AUTHORIZED:
         return state
      case REJECTED:
         return state
      default:
         return state
   }  
}
*/