import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase'; 

import Date from '../base/date';
import Loading from '../base/loading';

function Experience(props) {

  const {jobs, skills} = props;
  const skillHeader = "Skills and Technology Used";

  return(
    <>
      { isLoaded(jobs, skills) ? (
        Object.keys(jobs).map(sectionKey => {
          let job = jobs[sectionKey];
          let jobSkills = job.skills.map(skill => {
            return {...skills[skill.id], id: skill.id};
          });
          return (
            <section className="job card shadow" key={sectionKey}>
              <div className="card-body">
                <header className="border-bottom mb-3 pb-3">
                  <h2 className="card-title">{job.employer}</h2>
                  <h3 className="card-subtitle">{job.title}</h3>
                  <p className="m-0">
                    {job.start ? <Date date={job.start} format='MMMM YYYY' /> : ''} - {job.end ? <Date date={job.end} format='MMMM YYYY' /> : 'Present'}
                  </p>
                </header>
                {job.description && job.description.map((paragraph, id) => <p key={id}>{paragraph}</p>)}
                {job.skills && job.skills.length ? (
                  <section>
                    <h3 className="h5 text-secondary">
                      <span>{skillHeader}</span>
                      <span className="sr-only"> at {job.employer}</span>
                    </h3>
                    <ul aria-label={skillHeader + ' at ' + job.employer} className="list-unstyled justify-content-start d-flex flex-wrap align-items-center">
                      {jobSkills
                        .sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                        .map(skill => {
                          return (
                            <li className="m-2 skill-item" title={skill.title} key={sectionKey + '-' + skill.id}>
                              <span className="sr-only">{skill.title}</span>
                              <img className="w-100" aria-hidden="true" src={skill.logo} alt=""/>
                            </li>
                          )
                      })}
                    </ul>
                  </section>
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
  firestoreConnect(() => [{collection: 'experience', orderBy: ['start', 'desc']}, 'skills']),
  connect(state => {
    return {
      jobs: state.firestore.data.experience,
      skills: state.firestore.data.skills
    }
  })
)(Experience);
