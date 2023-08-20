import React from 'react';
import './Logo.scss';
import logoImage from './logo.png'; 

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="Logo" />
    </div>
  );
}

export default Logo;
