import React, { useEffect, useState, useContext } from 'react';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';
import '../index.css';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favorites, addToFavs } = useContext(AppContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const usersWithLikes = data.map((user) => ({ ...user, likes: 0 }));
        setUsers(usersWithLikes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

   
    fetchUsers();
  }, []);

  const handleAddToFavorites = (userId) => {
    setLoading(true); 
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, likes: user.likes + 1 } : user
      )
    );
    addToFavs(userId);
    setLoading(false);
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
          <Card
            key={user.id}
            dentista={user}
            addToFavs={handleAddToFavorites}
            isFavorite={favorites.some((favorite) => favorite.id === user.id)}
          >
            <div className="like-container">
              <span className="like-text">Likes: </span>
              <span className="like-count">{user.likes}</span>
            </div>
          </Card>
        ))}
      </div>
      <Link to="/favs" className="favButton">
        Ver Favoritos
      </Link>
    </div>
  );
};

export default Home;