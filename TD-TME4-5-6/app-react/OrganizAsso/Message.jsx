import React from 'react'

function Message(props){
    const { author, content } = props;

    return (
        <div className="message">
            <div className="message-author">{author}</div>
            <div className="message-content">{content}</div>
        </div>
    );
}

export default Message;