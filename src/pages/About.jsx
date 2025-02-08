// src/pages/About.jsx
import React from 'react';
import '../styles/About.css';
import { light } from '@mui/material/styles/createPalette';
import design from '../images/design.jpg'
import team from '../images/team.jpg'
import pens from '../images/pens.jpg'
import table from '../images/table.jpg'

const About = ({ isDarkTheme }) => {
  return (
    <div className={`about-page ${isDarkTheme ? 'dark' : 'light'}`}>
      <h1>À propos de nous</h1>
      <p className="about-intro">
        Découvrez qui nous sommes, notre mission et notre équipe.
      </p>

      {/* Section Mission */}
      <div className="about-section">
        <h2>Notre Mission</h2>
        <p>
          Nous nous engageons à fournir des solutions numériques innovantes pour aider nos clients à atteindre leurs objectifs. Notre mission est de transformer vos idées en réalité grâce à notre expertise technique et notre passion pour la technologie.
        </p>
      </div>

      {/* Section Équipe */}
      <div className="about-section">
        <h2>Notre Équipe</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={design} alt="Design équipe" />
            <h3>Design UX/UI</h3>
          </div>
          <div className="team-member">
            <img src={pens} alt="Coding équipe" />
            <h3>Cloud Computing</h3>
          </div>
          <div className="team-member">
            <img src={team} alt="Membre de l'équipe" />
            <h3>Dévelopement</h3>
          </div>
          <div className="team-member">
            <img src={table} alt="Membre de l'équipe" />
            <h3>Consulting IT</h3>
          </div>
        </div>
      </div>

      {/* Section Valeurs */}
      <div className="about-section">
        <h2>Nos Valeurs</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Nous repoussons les limites de la technologie pour offrir des solutions uniques et créatives.
            </p>
          </div>
          <div className="value-card">
            <h3>Qualité</h3>
            <p>
              Nous nous engageons à fournir des produits et services de haute qualité.
            </p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>
              Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins.
            </p>
          </div>
          <div className="value-card">
            <h3>Transparence</h3>
            <p>
              Nous croyons en une communication ouverte et honnête avec nos clients et partenaires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;