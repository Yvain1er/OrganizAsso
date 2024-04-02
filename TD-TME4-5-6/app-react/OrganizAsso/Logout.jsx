import React from 'react';

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // Appel de la fonction de rappel onLogout lorsque l'utilisateur se déconnecte
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div  className='Deconnexion'>
        <button onClick={handleLogout}>Déconnexion</button>
    </div>
    
  );
};

export default Logout;
