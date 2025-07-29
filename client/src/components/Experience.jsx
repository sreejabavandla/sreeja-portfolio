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
                    <div className="tech-stack">
            <span className="badge">C</span>
            <span className="badge">gRPC</span>
            <span className="badge">Protobuf</span>
            <span className="badge">Linux</span>
            <span className="badge">Python</span>
            <span className="badge">ANTLR</span>
            <span className="badge">Raspberry Pi</span>
            <span className="badge">Embedded Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
