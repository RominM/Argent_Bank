import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { usersReducer } from '../reducers/usersReducer';

// Initialisation
const initialState = {
  token: null,
  loggedIn: false,
  firstName: '',
  lastName: '',
  currentState: '',
};
// We verify is token already exist
function hasToken() {
  // token = token in local || session Storage || is null
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token') || null;
  // but if is null return false
  if (token === null) return false;
  // if not put the token in 'header' then return true
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  return true;
}

// const initState = { ...initialState, loggedIn: hasToken() };
const middleThunk = [thunk];

// MiddleWare extension
// const reduxDevtools =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__();

// STORE
const store = createStore(
  usersReducer,
  // initState,
  // compose(
  applyMiddleware(...middleThunk)
  // , reduxDevtools)
);

export { store, initialState };
