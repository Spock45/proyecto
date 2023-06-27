import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import '../index.css';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const addToFavorites = (cardData) => {
    setFavorites((prevFavorites) => [...prevFavorites, cardData]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Nuestros Profesionales</h1>
      <div className="card-container">
        {users.map((user) => (
          <Card key={user.id} dentista={user} addToFavs={addToFavorites} />
        ))}
      </div>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>{favorite.name}</li>
          ))}
        </ul>
      ) : (
        <p>No hay favoritos aún</p>
      )}
    </div>
  );
};

export default Home;
