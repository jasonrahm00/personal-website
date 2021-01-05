import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './components/base/nav/scrollToTop';
import About from './components/pages/about';
import Experience from './components/pages/experience';
import MainFooter from './components/base/mainFooter';
import MainNav from './components/base/nav/mainNav';
import Skills from './components/pages/skills';
import Education from './components/pages/education';

function App() {
  return (
    <Router>
      <MainNav />
      <main>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
        </Switch>
      </main>
      <MainFooter />
    </Router>    
  );
}

export default App;
