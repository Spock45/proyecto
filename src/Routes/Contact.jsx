import React, { useContext } from 'react';
import Form from '../Components/Form';
import { AppContext } from '../AppContext';

const Contact = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h2>¿Desea más información?</h2>
      <p>Haga su consulta, le responderemos a la brevedad</p>
      <Form />
    </div>
  );
};

export default Contact;

