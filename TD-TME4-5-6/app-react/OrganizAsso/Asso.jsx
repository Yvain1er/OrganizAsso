import React, { useState } from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import RegistrationForm from './RegistrationForm'


const Asso = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    setIsRegistered(true);
  };
  
  const handleLogin = (user) => {
    setCurrentUser(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setLoggedIn(false);
  };

  return (
    <div className='Connexion'>
      {!isRegistered && <RegistrationForm onRegister={handleRegistration} />}
      {loggedIn ? (
        <MainPage currentUser={currentUser} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Asso;
