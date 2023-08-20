import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './globalStyles.scss'; 

const App = () => {
    return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

console.log("Attempting to render...");
ReactDOM.render(<App />, document.getElementById('root'));