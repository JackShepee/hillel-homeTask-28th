import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import './globalStyles.scss'; 

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
