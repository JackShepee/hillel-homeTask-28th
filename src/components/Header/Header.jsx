import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1>Мій React Додаток</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="menu-item">
              Головна
            </Link>
          </li>
          <li>
            <Link to="/questions" className="menu-item">
              Питання
            </Link>
          </li>
          <li>
            <Link to="/materials" className="menu-item">
              Матеріали
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="menu-item">
              Контакти
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
