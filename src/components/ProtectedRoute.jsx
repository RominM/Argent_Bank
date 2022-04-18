import React from 'react'
import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

const useAuth = () => {
   // const user = localStorage.getItem('user')
   // return user ? true : false
   // or ?
   const user = { singIn: true };
   return user && user.singIn;
}

const ProtectedRoute = () => {
   const isAuth = useAuth();
   return isAuth ? <Dashboard /> : <SignIn />
}

export default ProtectedRoute