import React, { Component } from 'react';
import db from './config/firebase';

import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import MainNav from './components/mainNav';

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
          education: data[0].education,
          jobs: data[0].jobs,
          projects: data[0].projects,
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
            id="experience" 
            jobs={this.state.jobs} 
          /> 
          <Projects 
            id="projects" 
            projects={this.state.projects} 
          />
            {/* 
            <Skills 
              id="skills" 
              skills={this.state.skills} 
            />
            <Education 
              id="education" 
              education={this.state.education} 
            /> */}
        </main>
      </>
    );
  }

}

export default App;
