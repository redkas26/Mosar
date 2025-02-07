// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import client1 from '../images/client1.png'
import client2 from '../images/client2.jpeg'
import client3 from '../images/client3.png'
import client4 from '../images/client4.png'


const Home = ({ isDarkTheme }) => {
    return (
        <div className={`home-page ${isDarkTheme ? 'dark' : 'light'}`}>
          {/* Section Hero avec animation */}
          <section className="hero-section">
            <div className="hero-content">
              <h1>Solutions Numériques sur Mesure</h1>
              <p>Transformez vos idées en réalité avec notre expertise technique</p>
              <Link to="/contact" className="cta-button">
                Demander un devis
              </Link>
            </div>
          </section>

      {/* Section Services */}
      <section className="services-preview">
        <h2>Nos Expertises</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Développement Web</h3>
            <p>Applications performantes et évolutives</p>
            <Link to="/services#web" className="learn-more">
              En savoir plus →
            </Link>
          </div>
          <div className="service-card">
            <h3>Cloud Computing</h3>
            <p>Infrastructures scalables et sécurisées</p>
            <Link to="/services#cloud" className="learn-more">
              En savoir plus →
            </Link>
          </div>
          <div className="service-card">
            <h3>IA & Data Science</h3>
            <p>Solutions intelligentes basées sur les données</p>
            <Link to="/services#ai" className="learn-more">
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* Section Clients */}
      <section className="clients-section">
        <h2>Ils nous font confiance</h2>
        <div className="clients-grid">
          <img src={client1}alt="Logo client1" />
          <img src={client2}alt="Logo client2" />
          <img src={client3}alt="Logo client3" />
          <img src={client4}alt="Logo client4" />
        </div>
      </section>

      {/* Section CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à démarrer votre projet ?</h2>
          <Link to="/contact" className="cta-button">
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;