import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/pages/about';
import Experience from './components/pages/experience';
import MainFooter from './components/base/mainFooter';
import MainNav from './components/base/mainNav';
import Skills from './components/pages/skills';
import Education from './components/pages/education';

class App extends Component {
  render() {
    return (
      <div className="d-flex">
        <Router>
          <MainNav />
          <div>
            <main>
              <Switch>
                <Route path="/" exact component={About} />
                <Route path="/experience" component={Experience} />
                <Route path="/skills" component={Skills} />
                <Route path="/education" component={Education} />
              </Switch>
            </main>
            <MainFooter />
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
