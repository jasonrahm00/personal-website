import React from 'react';
import './App.css';

import Skills from './components/skills';
import Education from './components/education';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';

function App() {
  return (
    <div>
      <h1>Jason Rahm</h1>
      <Skills />
      <Education />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
