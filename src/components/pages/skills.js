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
    <main>
      <h1>My Skills</h1>
      { groupedSkills && groupedSkills !== null ? (
        Object.keys(groupedSkills).map((group, groupIndex) => {
          return (
            <section key={groupIndex}>
              <div>
                <header>
                  <h2>{group}</h2>
                </header>
                <ul aria-label={group}>
                  {groupedSkills[group].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1).map(skill => {
                    return (
                      <li data-skill-id={skill.id} key={groupIndex + '-' + skill.id}>
                        <img aria-hidden="true" src={skill.logo} alt=""/>
                        <span>{skill.title}</span>
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
    </main>
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
