import React, { Component } from 'react';
import './App.css';
import db from './config/firebase';

import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';

class App extends Component {
  state = {
    about: '',
    education: null,
    experience: null,
    projects: null,
    skills: null,
    qualifications: null
  }

  componentDidMount() {

    db.collection("resume")
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        this.setState({
          about: data[0].about,
          education: data[0].education,
          experience: data[0].experience,
          projects: data[0].projects,
          skills: data[0].skills,
          qualifications: data[0].qualifications
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Jason Rahm</h1>
        <About about={this.state.about}/>
        <Education />
        <Experience />
        <Projects />
        <Skills />
      </div>
    );
  }

}

export default App;
