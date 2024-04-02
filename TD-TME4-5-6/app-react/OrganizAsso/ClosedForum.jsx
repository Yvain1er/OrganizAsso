import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

const ClosedForum = ({ currentUser }) => {

  const closedMessages = [
    { id: 1, author: 'Administrateur', content: 'Message réservé aux administrateurs' },
    
  ];
   // Vérification si l'utilisateur est administrateur
   const isAdmin = currentUser && currentUser.role === 'admin'; 

   if (!isAdmin) {
     return (
       <div>
         <h2>Accès refusé</h2>
         <p>Vous n'avez pas les autorisations nécessaires pour accéder à ce forum.</p>
       </div>
     );
   }

  return (
    <div className='ClosedForum'>
      <MessageList messages={closedMessages} />
      <MessageForm currentUser={currentUser} />
    </div>
  );
};

export default ClosedForum;
