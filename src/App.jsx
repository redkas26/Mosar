import React, {useState} from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

function App ()  {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
        

    <Router >
      <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Routes>
        <Route path="/" element={<Home isDarkTheme={isDarkTheme} />} />
        <Route path="/about" element={<About isDarkTheme={isDarkTheme} />} />
        <Route path="/services" element={<Services isDarkTheme={isDarkTheme} />} />
        <Route path="/contact" element={<Contact isDarkTheme={isDarkTheme}/>} />
      </Routes>
      <Footer isDarkTheme={isDarkTheme} />  
      </div>
    </Router>
    

  );
};

export default App;