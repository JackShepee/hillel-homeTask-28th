import React from 'react';
import './MenuItem.scss';

const MenuItem = ({ title }) => {
  return (
    <div className="menu-item">
      {title}
    </div>
  );
}

export default MenuItem;
