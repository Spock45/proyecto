import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  };

  const renderButtonContent = () => {
    if (theme === 'light') {
      return (
        <>
          <span>On</span>
        </>
      );
    } else {
      return (
        <>
          <span>Off</span>
        </>
      );
    }
  };

  const buttonStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#f2f2f2',
    color: theme === 'dark' ? '#fff' : '#000',
  };

  return (
    <nav className={`navbar ${theme === 'dark' ? 'dark' : ''}`}>
      <ul className="navbar-list">
        <li>
          <Link to="/home">Inicio</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      <div className="theme-button-container">
        <button onClick={handleThemeChange} className="theme-button" style={buttonStyle}>
          {renderButtonContent()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
