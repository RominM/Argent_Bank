import axios from 'axios'

// GET TOKEN
export const getToken = (email, password) => {
   return axios.post("http://localhost:3001/api/v1/user/login", {
      "email": email,
      "password": password
   })
};

// GET PROFIL
export const getProfil = () => {
   return axios.post("http://localhost:3001/api/v1/user/profile", {}, {
      headers: {"Authorization": "Bearer " + localStorage.getItem('token')}
   })
}