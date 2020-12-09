import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase'; 

import Date from '../base/date';
import Loading from '../base/loading';

function Experience(props) {

  const {jobs, skills} = props;

  return(
    <>
      <h1>Experience</h1>
      { isLoaded(jobs, skills) ? (
        Object.keys(jobs).map(key => {
          let job = jobs[key];
          return (
            <section className="card" key={key}>
              <div className="card-body">
                <header>
                  <h2 className="card-title">{job.employer}</h2>
                  <h3 className="card-subtitle">{job.title}</h3>
                </header>
                {job.description && job.description.map((paragraph, id) => <p key={id}>{paragraph}</p>)}
                {job.skills && job.skills.length ? (
                  <ul aria-label="Skills and Technology Used">
                    {job.skills.map((skill, index) => (<li key={index}>{skills[skill.id].title}</li>))}
                  </ul>
                ) : ''}
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
  firestoreConnect(() => ['experience', {collection: 'skills', orderBy: 'title'}]),
  connect(state => {
    return {
      jobs: state.firestore.data.experience,
      skills: state.firestore.data.skills
    }
  })
)(Experience);
