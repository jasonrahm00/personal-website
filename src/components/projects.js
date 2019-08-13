import React, { Component } from 'react';

import db from '../config/firebase';

class Projects extends Component {
  state = {
    projects: null
  }

  componentDidMount() {
    db.collection("resume")
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        this.setState({
          projects: data[0].projects
        });
        console.log(this.state.projects);
      });
  }

  render() {
    return (
      <h2>Projects</h2>
    )
  }

}

export default Projects;