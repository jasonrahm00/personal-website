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

        <nav className="navbar navbar-dark bg-dark navbar-expand fixed-top">
          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
              <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
              <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
              <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
            </ul>
          </div>
        </nav>

        <main>
          <div id="home">
            <h1>Jason Rahm</h1>
            <About about={this.state.about} qualifications={this.state.qualifications} />
          </div>
          <Education navTarget="education" education={this.state.education} />
          <Experience navTarget="experience" jobs={this.state.jobs} />
          <Projects navTarget="projects" projects={this.state.projects} />
          <Skills navTarget="skills" skills={this.state.skills} />
        </main>

      </div>
    );
  }

}

export default App;
