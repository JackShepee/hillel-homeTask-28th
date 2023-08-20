import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <MenuItem title="Головна" />
      <MenuItem title="Матеріали" />
      <MenuItem title="Контакти" />
    </header>
  );
}

export default Header;
