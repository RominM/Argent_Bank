import React from 'react'
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const useAuth = () => {
   // const user = localStorage.getItem('user')
   // return user ? true : false
   // or ?
   const user = { singIn: false };
   return user && user.singIn;
}

const ProtectedRoute = () => {
   const isAuth = useAuth();
   return isAuth ? <Outlet /> : <SignIn />
}

export default ProtectedRoute