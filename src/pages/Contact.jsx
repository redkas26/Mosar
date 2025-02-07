// src/pages/Contact.jsx
import React from 'react';
import '../styles/Contact.css';

const Contact = ({ isDarkTheme }) => {
  return (
    <div className={`contact-page ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1>Contactez-nous</h1>
      <p className="contact-intro">
        Nous sommes à votre écoute pour répondre à vos questions et discuter de vos projets.
      </p>

      <div className="contact-container">
        {/* Formulaire de contact */}
        <div className="contact-form">
          <h2>Envoyez-nous un message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Envoyer
            </button>
          </form>
        </div>

        {/* Coordonnées et carte */}
        <div className="contact-info">
          <h2>Nos coordonnées</h2>
          <p>
            <strong>Adresse :</strong> 123 Rue de l'Innovation, 75001 Paris, France
          </p>
          <p>
            <strong>Téléphone :</strong> +33 1 23 45 67 89
          </p>
          <p>
            <strong>Email :</strong> contact@esn.com
          </p>

          {/* Carte Google Maps */}
          <div className="map-container">
            <iframe
              title="Localisation ESN"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991440608209!2d2.292292615674389!3d48.85837360866178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1622541234567!5m2!1sfr!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;