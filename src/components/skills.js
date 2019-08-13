import React, { Component } from 'react';

import db from '../config/firebase';

class Skills extends Component {
  state = {
    skills: null
  }

  componentDidMount() {
    db.collection("resume")
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        this.setState({
          skills: data[0].skills
        });
        console.log(this.state.skills);
      });
  }

  render() {
    return (
      <h2>Skills</h2>
    );
  }

}

export default Skills;