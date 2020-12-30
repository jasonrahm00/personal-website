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
          let jobSkills = job.skills.map(skill => {
            return {...skills[skill.id], id: skill.id};
          });
          return (
            <section className="card" key={key}>
              <div className="card-body">
                <header>
                  <h2 className="card-title">{job.employer}</h2>
                  <h3 className="card-subtitle">{job.title}</h3>
                </header>
                {job.description && job.description.map((paragraph, id) => <p key={id}>{paragraph}</p>)}
                {job.skills && job.skills.length ? (
                  <ul aria-label="Skills and Technology Used" className="list-unstyled justify-content-start d-flex flex-wrap">
                    {jobSkills
                      .sort((a, b) => a.title > b.title ? 1 : -1)
                      .map((skill, index) => {
                        return (
                          <li className="m-2 skill-item" title={skill.title} key={key + '-' + skill.id}>
                            <span className="sr-only">{skill.title}</span>
                            <img aria-hidden="true" src={skill.logo} alt=""/>
                          </li>
                        )
                    })}
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
  firestoreConnect(() => [{collection: 'experience', orderBy: ['start', 'desc']}, 'skills']),
  connect(state => {
    return {
      jobs: state.firestore.data.experience,
      skills: state.firestore.data.skills
    }
  })
)(Experience);
