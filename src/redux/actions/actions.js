import axios from 'axios';
import {
   loading,
   logginSuceed,
   logginFailure,
   logout,
   userData,
} from './types';
// Default
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

// Handler
const checkCredentials = (email, password, remember) => {
   return async (dispatch) => {
      dispatch(loading());
      try {
         const response = await axios.post('/login', {
            email: email,
            password: password,
         });

         const token = response.data.body.token;
         console.log('token : ' + token);

         if (token) {
            dispatch(logginSuceed());
            userProfiles(token, dispatch);
            if (remember) {
               console.log('remember is checked');
               localStorage.setItem('token', token);
            } else {
               sessionStorage.setItem('token', token);
            }
         }
      } catch (err) {
         console.error(err);
         dispatch(logginFailure());
      }
   };
};

const userProfiles = (token, dispatch) => {
   console.log('before');
   axios.defaults.headers.common = {
      Authorization: `bearer ${token}`,
   };
   dispatch(userData());
};

export {
   checkCredentials,
   loading,
   logginSuceed,
   logginFailure,
   logout,
   userData,
};
