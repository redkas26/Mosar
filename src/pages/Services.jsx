// src/pages/Services.jsx
import React from 'react';
import '../styles/Services.css';

const Services = ({ isDarkTheme }) => {
  return (
    <div className={`services-page ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1>Nos Services</h1>
      <p className="services-intro">
        Découvrez nos solutions numériques innovantes pour répondre à vos besoins.
      </p>

      <div className="services-grid">
        {/* Service 1 */}
        <div className="service-card">
          <h2>Développement Web</h2>
          <p>
            Création de sites web modernes, responsives et performants pour votre entreprise.
          </p>
          <ul>
            <li>Sites vitrines</li>
            <li>Applications web sur mesure</li>
            <li>E-commerce</li>
          </ul>
        </div>

        {/* Service 2 */}
        <div className="service-card">
          <h2>Développement Mobile</h2>
          <p>
            Conception d'applications mobiles pour iOS et Android, adaptées à vos utilisateurs.
          </p>
          <ul>
            <li>Applications natives</li>
            <li>Applications hybrides</li>
            <li>Maintenance et mise à jour</li>
          </ul>
        </div>

        {/* Service 3 */}
        <div className="service-card">
          <h2>Cloud Computing</h2>
          <p>
            Solutions cloud sécurisées pour stocker, gérer et analyser vos données.
          </p>
          <ul>
            <li>Migration vers le cloud</li>
            <li>Gestion des infrastructures</li>
            <li>Sécurité des données</li>
          </ul>
        </div>

        {/* Service 4 */}
        <div className="service-card">
          <h2>Consulting IT</h2>
          <p>
            Expertise et conseils pour optimiser votre infrastructure informatique.
          </p>
          <ul>
            <li>Audit et analyse</li>
            <li>Stratégie numérique</li>
            <li>Formation des équipes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;