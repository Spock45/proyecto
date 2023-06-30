import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../AppContext';
import axios from 'axios';
import '../index.css';

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
      <div className="detail-container">
        <h1 className="detail-title">Información del Odontólogo Favorito {id}</h1>
        {user ? (
          <>
            <div className="detail-info">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{user.name}</span>
            </div>
            <div className="detail-info">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{user.email}</span>
            </div>
            <div className="detail-info">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">{user.phone}</span>
            </div>
            <div className="detail-info">
              <span className="detail-label">Website:</span>
              <span className="detail-value">{user.website}</span>
            </div>
          </>
        ) : (
          <p>No se encontraron detalles del odontólogo.</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
