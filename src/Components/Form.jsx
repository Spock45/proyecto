import React, { useState } from 'react';
import '../index.css';

const Form = () => {
  const [theme] = useState('dark');
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
    <div className={`form ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="label">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="input"
            required
          ></textarea>
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;