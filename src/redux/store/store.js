import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import axios from 'axios';
import { usersReducer } from '../reducers/usersReducer';

const initialState = {
   token: null,
   loggedIn: false,
   user: null,
   currentState: '',
   loader: false,
   error: false,
};

function setInitialState() {
   const token =
      localStorage.getItem('token') || sessionStorage.getItem('token') || null;
   if (token === null) return initialState;
   axios.defaults.headers.common = { Authorization: `bearer ${token}` };
   return { ...initialState, loggedIn: true, token };
}

const middleThunk = [thunk];
const store = createStore(
   usersReducer,
   setInitialState(),
   composeWithDevTools(applyMiddleware(...middleThunk))
);

export { store, initialState };
