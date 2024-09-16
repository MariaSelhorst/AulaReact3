import React from 'react';
import { Link } from 'react-router-dom';
import "../../../src/App.css"
import Logo from "../../assets/Logo.png"

function NavBar({ toggleDarkMode, isDarkMode }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem' }}>
      <div>

        <img className="logo"
        src={Logo}
        alt=''/>

        <Link to="/">Home</Link>
      </div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

export default NavBar;


