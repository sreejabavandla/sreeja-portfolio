import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  return (
    <section id="education" style={{ backgroundColor: '#0f0f1b', padding: '4rem 2rem' }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '3rem',
        color: '#FF6FD8',
        fontSize: '2.8rem',
        fontFamily: 'Fira Code, sans-serif',
        textTransform: 'lowercase',
        letterSpacing: '1px'
      }}>
        education
      </h2>

      <VerticalTimeline lineColor="#FF6FD8">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{
            background: 'linear-gradient(135deg, #FF6FD8, #3813C2)',
            color: '#ffffff',
            boxShadow: '0 0 15px rgba(255, 111, 216, 0.5)',
          }}
          contentStyle={{
            background: 'rgba(255, 255, 255, 0.03)',
            color: '#f8dbf0',
            fontFamily: 'Fira Code',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: '0 0 25px rgba(255, 111, 216, 0.1)',
          }}
          contentArrowStyle={{ borderRight: '7px solid #0f0f1b' }}
          icon={<FaGraduationCap />}
        >
          <span className="year">2022 – 2026</span>
          <h3 className="vertical-timeline-element-title">B.E. in cse - cybersecurity, IoT and blockchain technology</h3>
          <h4 className="vertical-timeline-element-subtitle">cbit, hyderabad</h4>
          <p><strong>cgpa:</strong> 9.16</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{
            background: 'linear-gradient(135deg, #3813C2, #FF6FD8)',
            color: '#ffffff',
            boxShadow: '0 0 15px rgba(56, 19, 194, 0.5)',
          }}
          contentStyle={{
            background: 'rgba(255, 255, 255, 0.03)',
            color: '#f8dbf0',
            fontFamily: 'Fira Code',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: '0 0 25px rgba(255, 111, 216, 0.1)',
          }}
          contentArrowStyle={{ borderRight: '7px solid #0f0f1b' }}
          icon={<FaGraduationCap />}
        >
          <span className="year">2020 – 2022</span>
          <h3 className="vertical-timeline-element-title">intermediate - mpc</h3>
          <h4 className="vertical-timeline-element-subtitle">tapasya junior college</h4>
          <p><strong>percentage:</strong> 98%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Education;
