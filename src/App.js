import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'; 

import About from './components/pages/about';
import Experience from './components/pages/experience';
import MainFooter from './components/base/mainFooter';
import MainNav from './components/base/mainNav';
import Skills from './components/pages/skills';
import Education from './components/pages/education';

function App() {
  useFirestoreConnect(['resume']);
  const resume = useSelector(state => state.firestore.data.resume);
  return (
    <div className="d-flex">
      <Router>
        <MainNav />
        <div className="w-100">
          <main>
            {resume ? (
              <Switch>
                <Route path="/" exact render={() => <About content={resume.about}/>} />
                <Route path="/experience" component={Experience} />
                <Route path="/skills" component={Skills} />
                <Route path="/education" component={Education} />
              </Switch>
            ) : (
              <div>Loading</div>
            )}
          </main>
          <MainFooter />
        </div>
      </Router>
    </div>
  );
}

export default App;
