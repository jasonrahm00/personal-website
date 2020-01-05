import React, { Component } from 'react';
import './App.css';
import db from './config/firebase';
import Scrollspy from 'react-scrollspy';

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
    qualifications: [],
    spyItems: []
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
      })
      .then(this.setState({
        spyItems: ['home', 'experience', 'projects', 'skills', 'education']
      }));
  }

  render() {
    return (
      <div>
        <nav className="fixed-top">
            <Scrollspy
              className="nav justify-content-center"
              items={this.state.spyItems}
              currentClassName="active"
            >
              <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
              <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
              <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
              <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
            </Scrollspy>
        </nav>

        <main>
          <div id="home">
            <h1>Jason Rahm</h1>
            <About 
              about={this.state.about} 
              qualifications={this.state.qualifications} 
            />
          </div>
          <Experience 
            navTarget="experience" 
            jobs={this.state.jobs} 
          />
          <Projects 
            navTarget="projects" 
            projects={this.state.projects} 
          />
          <Skills 
            navTarget="skills" 
            skills={this.state.skills} 
          />
          <Education 
            navTarget="education" 
            education={this.state.education} 
          />
        </main>
      </div>
    );
  }

}

export default App;
