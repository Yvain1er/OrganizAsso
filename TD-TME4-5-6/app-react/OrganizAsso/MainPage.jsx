import React from 'react';
import Logo from './Logo';
import OpenForum from './OpenForum';
import ClosedForum from './ClosedForum';
import Logout from './Logout';
import UserProfile from './UserProfile';

const MainPage = ({ currentUser, onLogout }) => {

  return (
    <div className="MainPage">
      <header className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="user-profile">
          <UserProfile user={currentUser}/>
        </div>
        <div className="logout">
          <Logout onLogout={onLogout} />
        </div>
      </header>
      <main className="content">
        <h1>Bienvenue {currentUser.username}!</h1>
        <section className="forums">
          <div className="opened-forum">
            <OpenForum currentUser={currentUser} />
          </div>
          <div className="closed-forum">
            <ClosedForum currentUser={currentUser} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
