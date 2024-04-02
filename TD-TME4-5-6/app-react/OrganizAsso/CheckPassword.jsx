import React, { useState } from 'react';

function PasswordMatchChecker() {

    const [error, setError] = useState('');

    const checkPasswordMatch = () => {
        if (password1 !== password2) {
            setError("Les mots de passe ne correspondent pas!");
            return false;
        } else {
            setError('');
            return true;
        }
    };

    return checkPasswordMatch()
}

export default PasswordMatchChecker;