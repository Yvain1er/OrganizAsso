import React from 'react';
import MessageList from './MessageList';

const UserProfile = ({ user }) => {
  // Simuler une liste de messages de l'utilisateur
  const userMessages = [
    { id: 1, author: user.username, content: 'Message 1' },
    { id: 2, author: user.username, content: 'Message 2' },
    // Ajoutez plus de messages au besoin
  ];

  return (
    <div>
      <h2>Profil de {user.username}</h2>
      <MessageList messages={userMessages} />
    </div>
  );
};

export default UserProfile;
