import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase'; 
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import {FilledCard, BlankCard} from '../base/CustomCards';

const skillHeader = "Skills and Technology Used";

const SkillSection = (props) => {
  return (
    <Box component="section">
      <Typography variant="h6" component="h3" sx={{color: 'secondary.main'}}>
        <span>{skillHeader}</span>
        <span className='sr-only'> at {props.employer}</span>
      </Typography>
      <List 
        aria-label={skillHeader + ' at ' + props.employer}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap'
        }}
      >
        {props.skills
          .sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
          .map(skill => {
            return (
              <ListItem 
                key={props.sectionKey + '-' + skill.id}
                data-skill-id={skill.id}
                sx={{
                  width: 'auto'
                }}
              >
                <Box
                  component="img" 
                  src={skill.logo} 
                  alt={skill.title}
                  title={skill.title}
                  sx={{
                    width: 35
                  }}
                />
              </ListItem>
            )
        })}
      </List>
    </Box>
  )
}

function Experience(props) {

  const {jobs, skills} = props;
  
  return(
    <Container component="main">
      <Typography variant="h1" component="h1">My Experience</Typography>
      { isLoaded(jobs, skills) ? (
        Object.keys(jobs).map(sectionKey => {
          let job = jobs[sectionKey];
          let jobSkills = job.skills.map(skill => {
            return {...skills[skill.id], id: skill.id};
          });
          let jobData = {
            header: job.employer,
            subHeader: job.title,
            dates: {
              start: job.start,
              end: job.end
            },
            description: job.description
          }
          return (
            <FilledCard 
              key={sectionKey} 
              data={jobData}
              footerContent={jobSkills && jobSkills.length ? 
                <SkillSection employer={job.employer} skills={jobSkills} sectionKey={sectionKey} />
                : ''
              }
            />
          )
        })
      ) : (
        <>
          <BlankCard />
          <BlankCard />
        </>
      )}
    </Container>
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
