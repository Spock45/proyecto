import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import doctorImage from '../assets/doctor.jpg';
import '../index.css';

const Card = ({ dentista, addToFavs }) => {
  const addFav = () => {
    addToFavs(dentista.id);
  };

  return (
    <div className="card">
      <img className="doctor-image" src={doctorImage} alt="Doctor" />
      <h3 className="card-name">{dentista.name}</h3>
      <p className="card-username">({dentista.username})</p>
      <p className="card-id">Id: {dentista.id}</p>
      <Link to={`/dentista/${dentista.id}`} className="card-link">
        Ver detalles
      </Link>
      <button onClick={addFav} className="card-favButton">
        Agregar a Favoritos
      </button>
      <p className="card-likes">Likes: {dentista.likes}</p>
    </div>
  );
};

Card.propTypes = {
  dentista: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  addToFavs: PropTypes.func.isRequired,
};

export default Card;
