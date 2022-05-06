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
    <main>
      <h1>My Experience</h1>
      { isLoaded(jobs, skills) ? (
        Object.keys(jobs).map(sectionKey => {
          let job = jobs[sectionKey];
          let jobSkills = job.skills.map(skill => {
            return {...skills[skill.id], id: skill.id};
          });
          return (
            <section key={sectionKey}>
              <div>
                <header>
                  <h2>{job.employer}</h2>
                  <h3>{job.title}</h3>
                  <p>
                    {job.start ? <Date date={job.start} format='MMMM YYYY' /> : ''} - {job.end ? <Date date={job.end} format='MMMM YYYY' /> : 'Present'}
                  </p>
                </header>
                {job.description && job.description.map((paragraph, id) => <p key={id}>{paragraph}</p>)}
                {job.skills && job.skills.length ? (
                  <section>
                    <h3>
                      <span>{skillHeader}</span>
                      <span> at {job.employer}</span>
                    </h3>
                    <ul aria-label={skillHeader + ' at ' + job.employer}>
                      {jobSkills
                        .sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                        .map(skill => {
                          return (
                            <li data-job-id={sectionKey} data-skill-id={skill.id} title={skill.title} key={sectionKey + '-' + skill.id}>
                              <span>{skill.title}</span>
                              <img aria-hidden="true" src={skill.logo} alt=""/>
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
    </main>
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
