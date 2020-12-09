import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import Loading from '../base/loading';

function Skills(props) {
  
  const {skills} = props

  //TODO
    //Group by collection before outputting to page

  return(
    <>
      <h1>Skills</h1>
      {isLoaded(skills) ? (
        <ul>
          {Object.keys(skills).map((key, id) => (
            <li key={key}>{skills[key].title}</li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default compose(
  firestoreConnect(() => [{collection: 'skills', orderBy: 'title'}]),
  connect(state => {
    return {
      skills: state.firestore.data.skills
    }
  })
)(Skills);
