import React, { useState } from 'react';

function MessageForm(props) {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (message.trim() === '') {
            alert('Veuillez saisir un message');
            return;
        }
        props.onSubmit(message);
        setMessage('');
    };

    return (
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
            <textarea
                value={message}
                onChange={handleChange}
                placeholder="Écrivez votre message ici..."
                rows={3}
            />
            <button type="submit">Envoyer</button>
        </form>
        </div>
    );
}

export default MessageForm;
