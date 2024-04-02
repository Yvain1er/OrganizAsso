import React, { useState } from 'react';
import Logo from './Logo';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Vérification des informations de connexion (ici, une simple vérification)
    if (username && password) {
      const user = { username, password }; // Création d'un objet utilisateur temporaire
      onLogin(user); // Appel de la fonction de rappel onLogin avec l'utilisateur
    } else {
      alert('Veuillez saisir un nom d\'utilisateur et un mot de passe.');
    }
  };

  return (
    <div className='Connexion'>
       <div className="logo">
          <Logo />
        </div>
      <h2>Ouvrir une nouvelle session</h2>
     
      <form method='post'>
        <label htmlFor='id_input'>User Name</label>
        <input id='id_input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nom d'utilisateur" />
        <label htmlFor='id_password'>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
        <button onClick={handleLogin}>Connexion</button>
      </form>
      
    </div>
  );
};

export default LoginPage;
