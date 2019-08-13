import React, { Component } from 'react';

import db from '../config/firebase';

class Experience extends Component {
  state = {
    experience: null
  }

  componentDidMount() {
    db.collection("resume")
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        this.setState({
          experience: data[0].jobs
        });
        console.log(this.state.experience);
      });
  }

  render() {
    return (
      <h2>Experience</h2>
    )
  }

}

export default Experience;