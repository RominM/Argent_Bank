import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Features from '../components/features/Features';
import Hero from '../components/Hero';

const Home = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>Argent Bank - Welcome</title>
         </Helmet>
         <main>
            <Hero />
            <Features />
         </main>
      </HelmetProvider>
   );
};

export default Home;
