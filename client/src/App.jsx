import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home'
import Education from './components/Education'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Skills from './components/Skills';
import LeetCodeStats from './components/LeetCodeStats';


function App() {
const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    <Navbar/>
      <Home/>
      <Experience />
      <Education />
      <Projects />
      <LeetCodeStats />
      <Skills />
      <Contact />
    </>
  )
}

export default App;
