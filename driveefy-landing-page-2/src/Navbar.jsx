import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar_Data } from './utils/data';
import Driveefy_logo from "./assets/icons/driveefy_logo.svg";
import Hamburger_Menu from "./assets/icons/bars.svg";
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Driveefy_logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        {Navbar_Data.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <img src={Hamburger_Menu} alt="Hamburger Menu" />
      </div>
      {isOpen && (
        <div className="sidebar">
          <ul className="sidebar-links">
            <button onClick={toggleMenu}>❌</button>
            {Navbar_Data.map((item, index) => (
              <li key={index}>
                <Link to={item.path} onClick={toggleMenu}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;