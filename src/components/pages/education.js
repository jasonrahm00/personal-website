import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import Date from '../base/date';
import Loading from '../base/loading';

function Education(props) {

  const {schools} = props;

  return(
    <main>
      <h1>My Education</h1>
      { isLoaded(schools) ? (
        Object.keys(schools).map(key => {
          let entry = schools[key];
          return (
            <section key={key}>
              <div>
                <header>
                  <h2>{entry.school}</h2>
                  <h3>{entry.degree} - {entry.major}</h3>
                  <p>{entry.start ? <Date date={entry.start} format='MMMM YYYY' /> : ''} - {entry.end ? <Date date={entry.end} format='MMMM YYYY' /> : 'Present'}</p>
                </header>
                <p>{entry.description}</p>
              </div>
            </section>
          )
        })
      ) : (
        <Loading />
      )}
    </main>
  )
}

export default compose(
  firestoreConnect(() => ['education']),
  connect(state => {
    return {
      schools: state.firestore.data.education
    }
  })
)(Education);
