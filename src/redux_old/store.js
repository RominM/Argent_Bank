import { createStore } from "redux";
import { usersReducer } from "./usersReducer";

// MiddleWare extension
const devtoolsReduxExt =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// STORE
export const store = createStore(usersReducer, devtoolsReduxExt);

