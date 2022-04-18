import { createStore } from "redux";
import { usersReducer } from "../reducers/usersReducer";

// MiddleWare extension
const reduxToolPlugin =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// STORE
export const store = createStore(usersReducer, reduxToolPlugin);
