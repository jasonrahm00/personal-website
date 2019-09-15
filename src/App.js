import React, { Component } from 'react';
import './App.css';
import db from './config/firebase';

import About from './components/base/about';
import Education from './components/base/education';
import Experience from './components/base/experience';
import Projects from './components/base/projects';
import Skills from './components/base/skills';

class App extends Component {
  state = {
    about: '',
    education: [],
    experience: [],
    projects: [],
    skills: [],
    qualifications: []
  }

  componentDidMount() {

    db.collection("resume")
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        this.setState({
          about: data[0].about,
          education: data[0].education,
          jobs: data[0].jobs,
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
        <About about={this.state.about} qualifications={this.state.qualifications}/>
        <Education education={this.state.education}/>
        <Experience jobs={this.state.jobs}/>
        <Projects projects={this.state.projects}/>
        <Skills skills={this.state.skills} />
      </div>
    );
  }

}

export default App;
