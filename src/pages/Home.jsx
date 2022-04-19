// React
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Components
import Features from '../components/Features';
// Assets
import icoMoney from './../assets/img/icon-money.png';
import icoChat from './../assets/img/icon-chat.png';
import icoSecu from './../assets/img/icon-security.png';

const Home = () => {
   return (
      <HelmetProvider>
         <Helmet>
            <title>Argent Bank - Welcome</title>
         </Helmet>
         <main>
            <div className="hero">
               <section className="hero-content">
                  <h2 className="sr-only">Promoted Content</h2>
                  <p className="subtitle">No fees.</p>
                  <p className="subtitle">No minimum deposit.</p>
                  <p className="subtitle">High interest rates.</p>
                  <p className="text">Open a savings account with Argent Bank today!</p>
               </section>
            </div>
            <section className="features">
               <Features
                  icon={icoMoney}
                  icAlt="Chat Money"
                  title="More savings means higher rates"
                  descript="The more you save with us, the higher your interest rate will b11e!" />
               <Features
                  icon={icoChat}
                  icAlt="Chat Icon"
                  title="You are our #1 priority"
                  descript="Need to talk to a representative? You can get in touch through our 24/7 1chat or through a phone call in less than 5 minutes." />
               <Features
                  icon={icoSecu}
                  icAlt="Chat Secu"
                  title="Security you can trust"
                  descript="We use top of the line encryption to make sure your data and money is always safe." />
            </section>
         </main>
      </HelmetProvider>
   );
};

export default Home;
