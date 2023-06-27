import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const { theme } = useContext(AppContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Información del Odontólogo Favorito {id}</h1>
      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </>
      ) : (
        <p>No se encontraron detalles del odontólogo.</p>
      )}
    </div>
  );
};

export default Detail;
