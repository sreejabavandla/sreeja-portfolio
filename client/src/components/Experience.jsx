import React from 'react';
import './Experience.css';
import { FaBriefcase } from 'react-icons/fa';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">experience</h2>
      
      <div className="experience-card">
        <div className="experience-content">
          <h3 className="experience-title">project intern</h3>
          <h4 className="experience-subtitle">tata consultancy services (tcs)</h4>
          <p className="experience-date">april 2025 – june 2025</p>
          <p className="experience-description">
            worked on remote manageability of embedded systems, enabling secure updates and service control using gRPC.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
