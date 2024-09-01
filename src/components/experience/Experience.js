import React from 'react';
import './Experience.css';
import { Fade } from 'react-reveal';
import Section from '../section/Section';
import ExperienceCard from '../experienceCard/ExperienceCard';

const Experience = () => {
  return (
    <Section title="Projects">
      <div className="experience-content">
        <Fade bottom duration={1200} distance="20px">
          <div className="experience-cards-container">
            <ExperienceCard />
          </div>
        </Fade>
        <Fade bottom duration={1200} distance="20px">
          <div className="experience-footer">
            <p>
              Further in-depth projects can be found on my{' '}
              <a
                href="https://github.com/yashpatle23"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                Github
              </a>
              .
            </p>
          </div>
        </Fade>
      </div>
    </Section>
  );
};

export default Experience;
