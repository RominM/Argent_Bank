import axios from 'axios'

// GET TOKEN
export const getToken = (email, password) => {
   return axios.post("http://localhost:3001/api/v1/user/login", {
      "email": email,
      "password": password
   })
};

// Requête pour récupérer le profil correspondant au token.
// export const getProfile = () => {
//    return axios.get("http://localhost:3001/api/v1/user/profile", {}, {})
// }