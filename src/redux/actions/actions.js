import axios from 'axios';
import {
   LOGIN_SUCEED,
   LOGIN_FAILED,
   LOGOUT_ACTION,
   USER_PROFILE,
} from './types';
// Default
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

const loginSuceed = () => {
   return { type: LOGIN_SUCEED };
};

// Handler
const checkCredentials = (email, password, rememberMe) => {
   return async (dispatch) => {
      try {
         const response = await axios.post('/login', {
            email: email,
            password: password,
         });

         const token = response.data.body.token;
         console.log('token : ' + token);

         if (rememberMe && token) {
            localStorage.setItem('token', token);
         } else {
            sessionStorage.setItem('token', token);
         }

         axios.defaults.headers.common = {
            Authorization: `bearer ${token}`,
         };

         console.log(loginSuceed(), 'login success');
         // dispatch(loginSuceed(), token);
         // const user = userData(token);
         const userData = (async (token) => {
            console.log('here');
            await axios
               .post(
                  '/profile',
                  {},
                  {
                     headers: {
                        Authorization: 'Bearer ' + localStorage.getItem(token),
                     },
                  }
               )
               .then((response) => {
                  console.log(response);
                  console.log(response);
                  return response.data.body;
               });
         })();
         // userData(token);
      } catch (err) {
         console.error(err);
         dispatch(LOGIN_FAILED);
      }
   };
};
/*
const userData = async (token) => {
   await axios.post(
      '/profile',
      {},
      {
         headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
         },
      }
   );
};

export const getProfil = () => {
  return axios.post(
    '/profile',
    {},
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    }
  );
};

// UPDATE PROFIL
export const updateProfil = (firstName, lastName) => {
  return axios.put(
    '/profile',
    {
      firstName: firstName,
      lastName: lastName,
    },
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    }
  );
};
*/
export {
   checkCredentials,
   // CHECK_CREDENTIALS,
   LOGIN_SUCEED,
   LOGIN_FAILED,
   LOGOUT_ACTION,
   USER_PROFILE,
};
