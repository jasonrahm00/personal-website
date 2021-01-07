import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

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
      <Switch>
        <MainComponent exact path="/" component={About}/>
        <MainComponent path="/experience" component={Experience}/>
        <MainComponent path="/skills" component={Skills}/>
        <MainComponent path="/education" component={Education}/>
      </Switch>
      <MainFooter />
    </Router>    
  );
}

export default App;
