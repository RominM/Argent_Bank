// React
import React from 'react'
// Pages
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

const useAuth = () => {
   const user = { signIn: true };
   return user && user.signIn;
}

const ProtectedRoute = () => {
   const isAuth = useAuth();
   return isAuth ? <Dashboard /> : <SignIn />
}

export default ProtectedRoute