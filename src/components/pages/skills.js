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
    console.log(skillGroups);
    return skillGroups;
  }

  const groupedSkills = isLoaded(skills) ? groupSkills({...skills}) : null;

  return(
    <>
      <h1>Skills</h1>
      { groupedSkills && groupedSkills !== null ? (
        Object.keys(groupedSkills).map((group, groupIndex) => {
          return (
            <section className="skill-group card shadow" key={groupIndex}>
              <div className="card-body">
                <header className="border-bottom mb-3">
                  <h2>{group}</h2>
                </header>
                <ul aria-label={group} className="list-unstyled justify-content-center justify-content-xl-start d-flex flex-wrap align-items-end">
                  {groupedSkills[group].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1).map(skill => {
                    return (
                      <li className="skill-item" key={groupIndex + '-' + skill.id}>
                        <img className="w-100 mb-3" aria-hidden="true" src={skill.logo} alt=""/>
                        <span className="d-block text-center">{skill.title}</span>
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
