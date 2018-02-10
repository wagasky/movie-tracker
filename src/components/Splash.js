import React from 'react';
import LogIn from './LogIn';
import './Splash.css';

const Splash = () => {
  return (
    <div className="splash-page">
      { <LogIn /> }
    </div>
  )
}

export default Splash;