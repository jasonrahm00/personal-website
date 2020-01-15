import React, { Component } from 'react';
import './App.css';
import db from './config/firebase';

import About from './components/base/about';
import Education from './components/base/education';
import Experience from './components/base/experience';
import Projects from './components/base/projects';
import Skills from './components/base/skills';
import MainNav from './components/base/mainNav';

class App extends Component {
  state = {
    about: '',
    education: [],
    jobs: [],
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
        <main>
        <Experience 
            id="experience" 
            jobs={this.state.jobs} 
          />
          
          {/* <div id="home" className="anchor">
            <h1>Jason Rahm</h1>
            <About 
              about={this.state.about} 
              qualifications={this.state.qualifications} 
            />
          </div>
          <Projects 
            id="projects" 
            projects={this.state.projects} 
          />
          <Skills 
            id="skills" 
            skills={this.state.skills} 
          />
          <Education 
            id="education" 
            education={this.state.education} 
          /> */}
        </main>

        <MainNav />

      </div>
    );
  }

}

export default App;
