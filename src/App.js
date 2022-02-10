import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import ScrollToTop from './components/base/nav/scrollToTop';
import About from './components/pages/about';
import Experience from './components/pages/experience';
import MainFooter from './components/base/mainFooter';
import MainNav from './components/base/nav/mainNav';
import Skills from './components/pages/skills';
import Education from './components/pages/education';
import MainComponent from './components/base/mainComponent';

function App() {
  return (
    <Router>
      <MainNav />
      <ScrollToTop />
      <Routes>
        <MainComponent exact path="/" element={<About />}/>
        <MainComponent path="/experience" element={<Experience />}/>
        <MainComponent path="/skills" element={<Skills />}/>
        <MainComponent path="/education" element={<Education />}/>
      </Routes>
      <MainFooter />
    </Router>    
  );
}

export default App;
