import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';


import Loading from '../base/loading';

function Education(props) {

  const {schools} = props;

  return(
    <>
      <h1>Education</h1>
      { isLoaded(schools) ? (
        Object.keys(schools).map(key => {
          let entry = schools[key];
          return (
            <section className="card" key={key}>
              <img src="" alt="" className="card-img-top"/>
              <div className="card-body">
                <header>
                  <h2 className="card-title">{entry.school}</h2>
                  <h3 className="card-subtitle">{entry.degree} - {entry.major}</h3>
                </header>
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
