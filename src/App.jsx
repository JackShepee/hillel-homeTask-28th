import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Questions from "./components/Questions";
import Materials from "./components/Materials";
import Contacts from "./components/Contacts";
import "./globalStyles.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

console.log("Attempting to render...");
ReactDOM.render(<App />, document.getElementById("root"));
