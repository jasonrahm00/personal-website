import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import Loading from '../base/loading';

function Skills(props) {
  
  const {skills} = props;
  const groupSkills = skillOj => {
    let skillGroups = {
      "Web Development": [],
      "Content Management Systems": [],
      "Best Practices": [],
      "Project Management": [],
      "Other": []
    };
    for (const objKey in skillOj) {
      if (skillGroups[skillOj[objKey].group]) {
        skillGroups[skillOj[objKey].group].push({...skillOj[objKey], id: objKey});
      } else {
        skillGroups[skillOj[objKey].group] = [{...skillOj[objKey], id: objKey}]
      }
    }
    return skillGroups;
  }

  const groupedSkills = isLoaded(skills) ? groupSkills({...skills}) : null;

  return(
    <>
      <h1>Skills</h1>
      { groupedSkills && groupedSkills !== null ? (
        Object.keys(groupedSkills).map((key, id) => {
          return (
            <section className="card shadow w-75" key={id}>
              <div className="card-body">
                <header className="border-bottom mb-3">
                  <h2>{key}</h2>
                </header>
                <ul aria-label={key} className="list-unstyled justify-content-start d-flex flex-wrap align-items-center">
                  {groupedSkills[key].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1).map(skill => {
                    return (
                      <li className="m-2 skill-item" title={skill.title} key={key + '-' + skill.id}>
                        <span className="sr-only">{skill.title}</span>
                        <img className="w-100" aria-hidden="true" src={skill.logo} alt=""/>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
            </section>
          )
        })
        ) : 
        <Loading />
      }
    </>
  )
}

export default compose(
  firestoreConnect(() => ['skills']),
  connect(state => {
    return {
      skills: state.firestore.data.skills
    }
  })
)(Skills);
