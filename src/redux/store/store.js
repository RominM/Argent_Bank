import { createStore } from 'redux';
import { usersReducer } from '../reducers/usersReducer';
import axios from 'axios';

// Initialisation
const initialState = {
  token: null,
  loggedIn:false,
  firstName:"",
  lastName:"",
  currentState:""
};

function hasToken(){
  const token = localStorage.getItem("token") || sessionStorage.getItem("token") || null;
  if (token === null) return false;
  axios.defaults.headers.common = {'Authorization': `bearer ${token}`};
  return true;
}

// MiddleWare extension
const reduxToolPlugin =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// STORE
const store = createStore(usersReducer, {...initialState, loggedIn:hasToken()},reduxToolPlugin);

export {
  store,
  initialState
}
