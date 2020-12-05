import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

import Loading from '../base/loading';

function Education() {

  useFirestoreConnect(['education']);
  const data = useSelector(state => state.firestore.data.education);

  return(
    <>
      <h1>Education</h1>
      { isLoaded(data) ? (
        Object.keys(data).map(key => {
          let entry = data[key];
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

export default Education;
