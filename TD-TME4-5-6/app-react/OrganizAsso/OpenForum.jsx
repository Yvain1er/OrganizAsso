import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const OpenForum = ({ currentUser }) => {
  // Simuler une liste de messages ouverts
  const openMessages = [
    { id: 1, author: 'Utilisateur 1', content: 'Message 1' },
    { id: 2, author: 'Utilisateur 2', content: 'Message 2' },
    // Ajoutez plus de messages au besoin
  ];

  return (
    <div className='OpenForum'>
      <h2>Forum Ouvert</h2>
      <MessageList messages={openMessages} />
      <MessageForm currentUser={currentUser} />
    </div>
  );
};

export default OpenForum;
