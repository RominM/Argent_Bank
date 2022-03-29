import axios from 'axios'

// Requête pour récupérer le token de connexion.
export const getLogin = (email, password) => {
    return axios.post("http://localhost:3001/api/v1/user/login", {
        "email": email,
        "password": password
    })
}

// Requête pour récupérer le profil correspondant au token.
export const getProfile = () => {
   return axios.post("http://localhost:3001/api/v1/user/profile", {}, {})
}