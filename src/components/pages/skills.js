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

  const groupedSkills = isLoaded(skills) ? groupSkills(skills) : null;

  return(
    <>
      <h1>Skills</h1>
      { groupedSkills && groupedSkills !== null ? (
        Object.keys(groupedSkills).map((key, id) => {
          return (
            <section key={id}>
              <h2>{key}</h2>
              <ul>
                {groupedSkills[key].sort((a, b) => a.title > b.title ? 1 : -1).map(skill => {
                  return (
                    <li key={id + '-' + skill.id}>{skill.title}</li>
                  )
                })}
              </ul>
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
