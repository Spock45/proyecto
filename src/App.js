import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import './index.css';

const App = () => {
  return (
    <div className="root">
      <Router>
        <AppProvider>   
          <Navbar /> 
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dentista/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/*" element={<Home />} />
            <Route path="/" element={<Footer />} />      
            </Routes> 
          <Footer />
        </AppProvider>
      </Router>
    </div>
  );
};

export default App;
