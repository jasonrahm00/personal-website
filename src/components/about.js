import React, { Component } from 'react';

import db from '../config/firebase';

class About extends Component {
  state = {
    about: null
  }

  componentDidMount() {
    db.collection("resume")
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        this.setState({
          about: data[0].about
        });
        console.log(this.state.about);
      });
  }

  render() {
    return (
      <h2>About</h2>
    )
  }

}

export default About;
