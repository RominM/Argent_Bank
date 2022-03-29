import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SingInForm from '../components/SingInForm';

const SignIn = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>Argent Bank - Sign In</title>
         </Helmet>
         <main className="main bg-dark">
            <SingInForm />
         </main>
      </HelmetProvider>
   );
};

export default SignIn;
