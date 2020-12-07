import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'; 

import Date from '../base/date';
import Loading from '../base/loading';

function Experience() {

  useFirestoreConnect(['experience']);
  const data = useSelector(state => state.firestore.data.experience);

  //TODO:
    //access skills from store to populate skills list for each job
    //sort by start date

  return(
    <>
      <h1>Experience</h1>
      { isLoaded(data) ? (
        Object.keys(data).map(key => {
          let entry = data[key];
          return (
            <section className="card" key={key}>
              <img src="" alt="" className="card-img-top"/>
              <div className="card-body">
                <header>
                  <h2 className="card-title">{entry.employer}</h2>
                  <h3 className="card-subtitle">{entry.title}</h3>
                </header>
                {entry.description && entry.description.map((paragraph, id) => <p key={id}>{paragraph}</p>)}
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

export default Experience;
