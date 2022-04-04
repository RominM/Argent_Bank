import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getLogin } from '../redux/axios';

const SignIn = () => {
   const [email, setEmail] = useState("");
   const [password, setPasseword] = useState("");
   const [remember, setRemember] = useState(false);
 
   const handleSubmit = async(e) => {
      e.preventDefault();
      const result = await getLogin(email, password)
      console.log(result);
      const token = result.data.body.token
      console.log(token);
      return token
   }
   return (
      <HelmetProvider>
         <Helmet>
            <title>Argent Bank - Sign In</title>
         </Helmet>
         <main className="main bg-dark">
         <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input 
          type="text" 
          id="username" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPasseword(e.target.value)}
/>
        </div>
        <div className="input-remember">
          <label htmlFor="remember-me">Remember me</label>
          <input type="checkbox" id="remember-me" value={remember} onChange={(e) => setRemember(e.target.value)}
/>
        </div>
        {/* <Link to="/dashboard" className="sign-in-button">Sign In</Link> */}
        {/* SHOULD BE THE BUTTON BELOW*/}
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
         </main>
      </HelmetProvider>
   );
};

export default SignIn;
