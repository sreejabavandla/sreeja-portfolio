import './Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Home() {
  return (
    <>
      <section className="home">
        <h1 className="typing">sreeja bavandla</h1>
        <h2 className="subtitle">
          final-year computer science student specializing in cybersecurity, IoT, and blockchain. <br />
          i enjoy solving real-world problems with tech that matters.
        </h2>

        <div className="socials">
          <a href="https://www.linkedin.com/in/sreejabavandla/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/sreejabavandla" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://leetcode.com/sreejabavandla1" target="_blank" rel="noopener noreferrer">
            <SiLeetcode size={30} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
