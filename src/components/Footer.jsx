// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = ({ isDarkTheme }) => {
  return (
    <footer className={`footer ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="footer-content">
        {/* Section À propos */}
        <div className="footer-section">
          <h3>À propos</h3>
          <p>
            Nous sommes une ESN spécialisée dans le développement de solutions numériques innovantes pour accompagner vos projets.
          </p>
        </div>

        {/* Section Liens utiles */}
        <div className="footer-section">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Section Coordonnées */}
        <div className="footer-section">
          <h3>Coordonnées</h3>
          <p>123 Rue de l'Innovation</p>
          <p>75001 Paris, France</p>
          <p>Email: contact@esn.com</p>
          <p>Tél: +33 1 23 45 67 89</p>
        </div>

        {/* Section Réseaux sociaux */}
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      {/* Section Mentions légales */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MOSAR. Tous droits réservés.</p>
        <p>
          <a href="/privacy">Politique de confidentialité</a> |{' '}
          <a href="/terms">Conditions générales</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;