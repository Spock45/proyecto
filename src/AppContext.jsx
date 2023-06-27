import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addToFavs = (dentista) => {
    setFavorites([...favorites, dentista]);
  };

  const navigateToDetail = (id) => {
  
    console.log(`Navigating to Dentist Detail: ${id}`);
  };

  const contextValue = {
    theme,
    favorites,
    toggleTheme,
    addToFavs,
    navigateToDetail,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
