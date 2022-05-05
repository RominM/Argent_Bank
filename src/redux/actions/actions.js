import axios from 'axios';
// import Service from '../service/service';
import {
   loading,
   logginSuceed,
   logginFailure,
   logout,
   userProfile,
} from './types';
// Default
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

// Handler
const checkCredentials = (email, password, remember) => {
   return async (dispatch) => {
      dispatch({
         type: loading().type,
         payload: true,
      });
      try {
         const response = await axios.post('/login', {
            email: email,
            password: password,
         });

         const token = response.data.body.token;

         if ((remember && token) || token) {
            dispatch({
               type: logginSuceed().type,
               payload: { token },
               loader: true,
            });
            userData(token, dispatch);
            localStorage.setItem('token', token);
            sessionStorage.setItem('token', token);
            if (remember) {
               console.log('remember is checked');
            }
         } else {
            localStorage.removeItem('token', token);
            sessionStorage.removeItem('token', token);
         }
      } catch (err) {
         console.error(err);
         dispatch({
            type: logginFailure().type,
            payload: true,
         });
      }
   };
};

const userData = (token, dispatch) => {
   const user = (axios.defaults.headers.common = {
      Authorization: `bearer ${token}`,
   });
   dispatch({
      type: userProfile().type,
      payload: { user },
   });
};

/*
//TODO have to make a function to keep user logged even though refresh
const rememberUser = () => {
   if (token.localStorage.getItem) {
      dispatch({
         type: rememberUser().type,
         payload: { token },
      });
   }
};
*/

export {
   checkCredentials,
   loading,
   logginSuceed,
   logginFailure,
   logout,
   userProfile,
};
