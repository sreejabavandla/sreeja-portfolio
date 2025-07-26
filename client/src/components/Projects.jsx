import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">projects</h2>

      <div className="project-card">
        <a href="https://your-project-link.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/assets/project1.png" // replace with your actual path
            alt="Project Screenshot"
            className="project-image"
          />
        </a>

        <div className="project-info">
          <a
            href="https://your-project-link.com"
            className="project-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            PlaylistSync – Cross-platform Music Playlist Transfer Tool
          </a>
          <p className="project-description">
            Transfer your playlists between Spotify and YouTube seamlessly using OAuth and public APIs. React + FastAPI based full-stack project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
