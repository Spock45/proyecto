import React, { useEffect, useState, useContext } from 'react';
import Card from '../Components/Card';
import { AppContext } from '../AppContext';
import '../index.css';

const Favs = () => {
  const { favorites, addToFavs } = useContext(AppContext);
  const [favUsers, setFavUsers] = useState([]);

  useEffect(() => {
    const storedFavUsers = localStorage.getItem('favUsers');
    if (storedFavUsers) {
      setFavUsers(JSON.parse(storedFavUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favUsers', JSON.stringify(favUsers));
  }, [favUsers]);

  const handleAddLike = (dentistaId) => {
    const updatedFavUsers = favUsers.map((user) =>
      user.id === dentistaId ? { ...user, likes: user.likes + 1 } : user
    );
    setFavUsers(updatedFavUsers);
    addToFavs(dentistaId);
  };
   

  return (
    <div>
      <h1>Favoritos</h1>
      <div className="card-container">
        {favorites.map((dentista) => {
          const existingCard = favUsers.find((user) => user.id === dentista.id);
          const updatedLikes = existingCard ? existingCard.likes : 0;

          return (
            <Card
              key={dentista.id}
              dentista={dentista}
              addToFavs={handleAddLike}
              isFavorite={true}
              likes={updatedLikes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favs;