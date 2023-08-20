import React from 'react';
import Description from './Description/Description';
import Logo from './Logo/Logo';
import './Main.scss';

const Main = () => {
  return (
    <main className="main-content">
      <Logo />
      <Description />
    </main>
  );
}

export default Main;
