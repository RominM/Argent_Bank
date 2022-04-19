import React from 'react'
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

const useAuth = () => {
   const user = { signIn: false };
   return user && user.signIn;
}

const ProtectedRoute = () => {
   const isAuth = useAuth();
   return isAuth ? <SignIn /> : <Dashboard />
}

export default ProtectedRoute