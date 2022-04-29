import axios from 'axios';
// ACTION TO SAVE TOKEN IN REDUX #1
const SIGN_IN_ACTION = "SIGN_IN_ACTION";
// ACTION TO DELET TOKEN
const SIGN_OUT_ACTION = "SIGN_OUT_ACTION";
// ACTION ...
const UPDATE_TOKEN = "UPDATE_TOKEN";


axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

// GET TOKEN
const checkCredentials = (email, password, rememberMe) => {
   return async (dispatch){
      // eslint-disable-next-line no-useless-concat
   console.log('Email : ' + email + ' /' + 'Password : ' + password);
   try{
      const response = await axios.post('/login', {
         email: email,
         password: password,
      });
      if (rememberMe) localStorage.setItem("token", response.data.token);
      else sessionStorage.setItem("token", response.data.token)
      axios.defaults.headers.common = {'Authorization': `bearer ${response.data.token}`}
      
     dispatch("loginSuceed", {token: response.data.token})
   }
   catch(err) {
      console.error(err);
    dispatch("loginFailed")

   }
   
};




// GET PROFIL
export const getProfil = () => {
  return axios.post(
    baseURL + '/profile',
    {},
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    }
  );
};

// UPDATE PROFIL
export const updateProfil = (firstName, lastName) => {
  return axios.put(
    baseURL + '/profile',
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
   SIGN_IN_ACTION,
   SIGN_OUT_ACTION,
   UPDATE_TOKEN,
   checkCredentials
}