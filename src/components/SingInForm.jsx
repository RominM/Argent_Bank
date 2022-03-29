import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingInForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPasseword] = useState("");
  const [remember, setRemember] = useState(false);
  
  // console.log(maVariable);
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input 
          type="text" 
          id="username" 
          value={userName} 
          onChange={(e) => setUserName(e.target.value)}
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
  );
};

export default SingInForm;
