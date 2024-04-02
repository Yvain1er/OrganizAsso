import { useState } from 'react';
import React from 'react'
import PasswordMatchChecker from './CheckPassword';

function RegistrationForm(props){
    const { setIsSign } = props;
    const [passwordError, setPasswordError] = useState(false);
   
    const handleSignin = () => {
        
        const passwordMatch = PasswordMatchChecker();
        if (passwordMatch) {
            setIsSign(true);
        } else {
            setPasswordError(true);
            alert("Les mots de passe ne correspondent pas!");
        }
    };
    return (
        <div className='SignIn'>
            <h2 style={{color:'Blue'}}>Inscription</h2>
            <form method="post">
                <label htmlFor="id_prenom"> Prenom </label>
                <input id="id_prenom" type="text"/>

                <label htmlFor="Nom"> Nom </label>
                <input id="id_prenom" type="text"/>

                <label htmlFor="id_log">User name</label> 
                <input id="id_log" type="text"/>

                <label htmlFor="id_password">Password</label> 
                <input id="id_password" type="password"/>

                <label htmlFor="id_confirm">Confirm Password</label> 
                <input id="id_confirm" type="password"/>

                <input id="id_annuler" type="reset" value="Annuler" />
                
                <button onClick={handleSignin}>S'inscrire</button>
            </form>
        </div>
    )
}

export default RegistrationForm