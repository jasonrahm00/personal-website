import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import Date from '../base/date';
import Loading from '../base/loading';

function Education(props) {

  const {schools} = props;

  return(
    <>
      { isLoaded(schools) ? (
        Object.keys(schools).map(key => {
          let entry = schools[key];
          return (
            <section className="card shadow" key={key}>
              <div className="card-body">
                <header className="border-bottom mb-3 pb-3">
                  <h2 className="card-title">{entry.school}</h2>
                  <h3 className="card-subtitle">{entry.degree} - {entry.major}</h3>
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
    </>
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
