import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';
import { usersReducer } from '../reducers/usersReducer';

const middleThunk = [thunk];
const initialState = {
   token: null,
   loggedIn: false,
   user: {},
   currentState: '',
};

function hasToken() {
   const token =
      localStorage.getItem('token') || sessionStorage.getItem('token') || null;
   if (token === null) return false;
   axios.defaults.headers.common = { Authorization: `bearer ${token}` };
   return true;
}
const initState = { ...initialState, loggedIn: hasToken() };

const store = createStore(
   usersReducer,
   initState,
   composeWithDevTools(applyMiddleware(...middleThunk))
);

export { store, initialState };
