import React from 'react';
import cryptoDashboardImage from '../assets/cryptotracker.png';
import weatherAppImage from '../assets/weather-web.png';
import rock from '../assets/rockpaperscissor.png';
import './Projects.css'; 

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        <div className="project-card">
          <img src={weatherAppImage} alt="Weather Web App" />
          <h3>Weather Web App</h3>
          <a href="https://projectweatherappweb.netlify.app" target='_blank'>click here</a>
          <p>Uses a weather API to fetch current weather details. Built with JavaScript, HTML, CSS.</p>
        </div>

        <div className="project-card">
          <img src={cryptoDashboardImage} alt="Crypto Dashboard" />
          <h3>Crypto Dashboard</h3>
          <a href="https://crypto-tarcker-web-app.netlify.app" target='_blank'>click here</a>
          <p>Built with React and API integration to display real-time cryptocurrency prices and trends.</p>
        </div>

        <div className="project-card">
          <img src={rock} alt="Rock Paper Scissors" />
          <h3>Rock Paper Scissors</h3>
          <p>A fun browser-based game using DOM and JavaScript. Shows result and keeps score dynamically.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
