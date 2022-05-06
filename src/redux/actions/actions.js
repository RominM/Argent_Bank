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
      //First thing, play Loader
      dispatch({
         //TODO Have to clean "function().type"
         type: loading().type,
         payload: true,
      });
      //Then try to get things
      try {
         //Call api to get Token
         const response = await axios.post('/login', {
            email: email,
            password: password,
         });
         const token = response.data.body.token;
         //User select "remember me" & token is generate
         if ((remember && token) || token) {
            //Is login success
            dispatch({
               type: logginSuceed().type,
               payload: { token },
               loader: true,
            });
            //Then get user informations(FirstName/LastName)
            userData(token, dispatch);
            //Put the token in LocalStorage to keep user logged
            localStorage.setItem('token', token);
            sessionStorage.setItem('token', token);
         } else {
            //User doesn't select "remember me" then remove token from LocalStorage
            localStorage.removeItem('token', token);
            sessionStorage.removeItem('token', token);
         }
      } catch (err) {
         //If call api is fail, catch error
         console.error(err);
         dispatch({
            type: logginFailure().type,
            payload: true,
         });
      }
   };
};

const userData = async (token, dispatch) => {
   // TODO have to defined "axios.defaults.headers.common" concept without "/profile"
   const user =
      // (axios.defaults.headers.common = {
      //    Authorization: `bearer ${token}`,
      // });
      await axios
         .post(
            'http://localhost:3001/api/v1/user/profile',
            {},
            {
               headers: {
                  Authorization: 'Bearer' + token,
               },
            }
         )
         .then((response) => {
            return response.data.body;
         })
         .catch((error) => console.log(error));
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
