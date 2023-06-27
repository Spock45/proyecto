import React, { useContext } from 'react';
import Card from '../Components/Card';
import { AppContext } from '../AppContext';
import '../index.css';

const Favs = () => {
  const { favorites, theme } = useContext(AppContext);

  const cardTheme = theme === 'dark' ? 'dark-card' : 'light-card';

  return (
    <main className={`theme ${theme === 'dark' ? 'dark' : ''}`}>
      <h1>Favoritos</h1> 
      <div className="card-grid">
        {favorites.map((dentista) => (
          <Card key={dentista.id} dentista={dentista} className={`card ${cardTheme}`} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
