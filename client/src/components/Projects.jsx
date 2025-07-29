import React from 'react';
import './Projects.css';
import Playlistsyncimg from '../assets/playlistsync.png';
import fakenews from '../assets/fakenews.png'

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">projects</h2>

      <div className="project-card">
        <a href="https://sync-playlist.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img
            src={Playlistsyncimg}
            alt="Project Screenshot"
            className="project-image"
          />
        </a>
        

        <div className="project-info">
          <a
            href="https://sync-playlist.vercel.app/"
            className="project-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            playlistsync – cross-platform music playlist transfer tool
          </a>
          <p className="project-description">
            transfer your playlists between <b>spotify</b> and youtube seamlessly using OAuth and public apis. <br />
  <div className="tech-stack">
  <span className="badge">React</span>
  <span className="badge">Node.js</span>
  <span className="badge">Express</span>
  <span className="badge">OAuth 2.0</span>
  <span className="badge">YouTube API</span>
</div>

          </p>
        </div>
      </div>

      <div className="project-card">
        <a href="https://detectfake-news.streamlit.app/" target="_blank" rel="noopener noreferrer">
          <img
            src={fakenews} 
            alt="Project Screenshot"
            className="project-image"
          />
        </a>

        <div className="project-info">
          <a
            href="https://detectfake-news.streamlit.app/"
            className="project-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            fake news detector – cross-platform music playlist transfer tool
          </a>
          <p className="project-description">
            machine learning-powered web app that detects fake news using nlp and traditional classifiers like logistic regression.
includes SHAP-based explainability and real-time article validation via news api.  <br />
  <div className="tech-stack">
  <span className="badge">Python</span>
  <span className="badge">scikit-learn</span>
  <span className="badge">Streamlit</span>
  <span className="badge">SHAP</span>
  <span className="badge">NewsAPI</span>
</div>

          </p>
        </div>
      </div>

            <div className="project-card">
   

        <div className="project-info">
          <a
            href="https://github.com/sreejabavandla/movie-recommender-system/tree/main/mrs"
            className="project-title"
            target="_blank"
            rel="noopener noreferrer"
          >
            movie recommender system
          </a>
          <p className="project-description">
            a personalized movie recommendation engine using collaborative filtering and content-based techniques.
recommends top movies based on user preferences, genre similarity, and rating patterns. <br />
<div className="tech-stack">
  <span className="badge">Python</span>
  <span className="badge">Pandas</span>
  <span className="badge">scikit-learn</span>
  <span className="badge">Streamlit</span>
  <span className="badge">TMDB API</span>
</div>


          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
