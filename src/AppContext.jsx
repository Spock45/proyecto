import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const [theme, setTheme] = useState('light');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setTotalLikes(favorites.length);
  }, [favorites]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const addToFavs = (dentista) => {
    setFavorites((prevFavorites) => [...prevFavorites, dentista]);
  };

  const removeFromFavs = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((dentista) => dentista.id !== id));
  };

  const navigateToDetail = (id) => {
    console.log(`Navigating to Dentist Detail: ${id}`);
  };

  const contextValue = {
    totalLikes,
    theme,
    favorites,
    toggleTheme,
    addToFavs,
    removeFromFavs,
    navigateToDetail,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
