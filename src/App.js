import React, { Component } from 'react';
import db from './config/firebase';

import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import MainNav from './components/mainNav';
import MainFooter from './components/mainFooter';

class App extends Component {
  state = {
    about: {},
    education: [],
    jobs: [],
    projects: [],
    skills: []
  }

  componentDidMount() {
    db.collection("resume")
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        this.setState({
          about: data[0].about,
          jobs: data[0].jobs,
          skills: data[0].skills
        });
      });
  }

  render() {
    return (
      <>
        <MainNav />
        <main className="mt-5">
          <About 
            id="about"
            about={this.state.about}
          />
          <Experience 
            id="exp" 
            jobs={this.state.jobs} 
          /> 
          <Skills 
            id="skills" 
            skills={this.state.skills} 
          />
        </main>
        <MainFooter />
      </>
    );
  }

}

export default App;
