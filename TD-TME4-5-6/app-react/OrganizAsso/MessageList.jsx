import React, { useState } from 'react';
import Message from './Message';

const MessageList = ({ messages }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMessages, setFilteredMessages] = useState(messages);

  // Fonction de recherche des messages
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = messages.filter(message =>
      message.content.toLowerCase().includes(query) ||
      message.author.toLowerCase().includes(query)
    );
    setFilteredMessages(filtered);
  };

  return (
    <div className='MessageList'>
      <h3>Liste des Messages</h3>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Rechercher des messages..."
      />
      <ul>
        {filteredMessages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
