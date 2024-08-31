import React from 'react';
import Data from '../../data/project.json';
import './ExperienceCard.css';

const ExperienceCard = () => {
  return (
    <div className="experience-cards">
      {Data.projects.map((project) => (
        <div key={project.id} className="card">
          <img src={project.image} alt={project.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{project.id}. {project.title}</h3>
            <p className="card-description">{project.description}</p>
            <div className="card-links">
              {project.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="card-link">
                  {link.key}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
