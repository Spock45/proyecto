import React, { useState, useContext } from 'react';
import '../index.css';
import { AppContext } from '../AppContext';

const Contact = () => {
  const { theme } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setError('Por favor, complete todos los campos');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Por favor, ingrese un correo electrónico válido');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setError('');
  };

  const isValidEmail = (value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(value);
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h2>¿Desea más información?</h2>
      <p>Haga su consulta, le responderemos a la brevedad</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          ></textarea>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;