import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Education from './components/Education'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {

  return (
    <>
    <Navbar/>
      <Home/>
      <Education />
      <Experience />
      <Projects />
    </>
  )
}

export default App;
