import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import ScrollToTop from './components/base/nav/ScrollToTop';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import MainFooter from './components/base/MainFooter';
import MainNav from './components/base/nav/MainNav';
import Skills from './components/pages/Skills';
import Education from './components/pages/Education';
import Theme from './Theme';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <MainNav />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" render={() => <About />}/>
          <Route exact path="/experience" render={() => <Experience />}/>
          <Route exact path="/skills" render={() => <Skills />}/>
          <Route exact path="/education" render={() => <Education />}/>
        </Switch>
        <MainFooter />
      </Router>    
    </ThemeProvider>
  );
}
