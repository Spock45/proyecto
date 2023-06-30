import React, { useContext } from 'react';
import Card from '../Components/Card';
import { AppContext } from '../AppContext';
import '../index.css';


const Favs = () => {
  const { favorites, addToFavs, theme } = useContext(AppContext); 
  const cardTheme = theme === 'dark' ? 'dark-card' : 'light-card';

  return (
    <main className={`theme ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container">
        <h1>Favoritos</h1>
        <div className="cards-container">
          {favorites.map((dentista) => (
            <Card
              key={dentista.id}
              dentista={dentista}
              className={`card ${cardTheme}`}
              addToFavs={addToFavs}
              isFavorite={true}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Favs;

