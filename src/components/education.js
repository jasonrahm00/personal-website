import React, { Component } from 'react';

import db from '../config/firebase';

class Education extends Component {
  state = {
    education: null
  }

  componentDidMount() {
    db.collection("resume")
      .get()
      .then(snapshot => {
        const data = snapshot.docs.map(doc => doc.data());
        this.setState({
          education: data[0].education
        });
        console.log(this.state.education);
      });
  }

  render() {
    return (
      <section>
        <h2>Education</h2>
      </section>
    )
  }

}

export default Education;
