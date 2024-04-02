import React from 'react';
import logoImage from './logo.jpg'; 

const Logo = () => {
  return (
    <div>
      <img src={logoImage} alt="Logo de l'application" />
      <h1 className='logo-text'>Organiz'Asso</h1>
    </div>
  );
};
export default Logo;
