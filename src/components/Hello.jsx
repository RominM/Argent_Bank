import React, { useState } from 'react';

const Hello = () => {
  const [user, setUser] = useState(null);
  // setUser(currentUser);

  const handleEdit = () => {
    console.log('Handle Edit');
  };

  const handleLogout = () => {
    console.log('Handle Logout');
  }

  return (
    <div className="header">
      {user && (
        <h1>
          Welcome back
          <br />
          {user.name}
        </h1>
      )}
      <button className="edit-button" onClick={() => handleEdit()}>Edit Name</button>
      <button className='logout-button' onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Hello;
