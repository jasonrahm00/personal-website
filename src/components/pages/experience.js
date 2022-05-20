import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase'; 
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Date from '../base/date';
import Loading from '../base/loading';

function Experience(props) {

  const {jobs, skills} = props;
  const skillHeader = "Skills and Technology Used";

  return(
    <Container component="main">
      <Typography variant="h1" component="h1">My Experience</Typography>
      { isLoaded(jobs, skills) ? (
        Object.keys(jobs).map(sectionKey => {
          let job = jobs[sectionKey];
          let jobSkills = job.skills.map(skill => {
            return {...skills[skill.id], id: skill.id};
          });
          return (
            <Card 
              key={sectionKey} 
              component="section" 
              raised={true}
              sx={{
                marginBottom: '3rem'
              }}
            >
              <CardContent>
                <Box component="header">
                  <Typography variant="h2" component="h2">{job.employer}</Typography>
                  <Typography variant="h3" component="h3">{job.title}</Typography>
                  <Typography paragraph={true}>
                    {job.start ? <Date date={job.start} format='MMMM YYYY' /> : ''} - {job.end ? <Date date={job.end} format='MMMM YYYY' /> : 'Present'}
                  </Typography>
                </Box>
                {job.description && job.description.map((paragraph, id) => (
                  <Typography paragraph={true} key={id}>{paragraph}</Typography>
                ))}
                {job.skills && job.skills.length ? (
                  <Box component="section">
                    <Typography variant="h6" component="h3" sx={{color: 'secondary.main'}}>
                      <span>{skillHeader}</span>
                      <span className='sr-only'> at {job.employer}</span>
                    </Typography>
                    <List 
                      aria-label={skillHeader + ' at ' + job.employer}
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap'
                      }}
                    >
                      {jobSkills
                        .sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
                        .map(skill => {
                          return (
                            <ListItem 
                              key={sectionKey + '-' + skill.id}
                              data-skill-id={skill.id}
                              sx={{
                                width: 'auto'
                              }}
                            >
                              <Box
                                component="img" 
                                src={skill.logo} 
                                alt={skill.title}
                                sx={{
                                  width: 35
                                }}
                              />
                            </ListItem>
                          )
                      })}
                    </List>
                  </Box>
                ) : ''}
              </CardContent>
            </Card>
          )
        })
      ) : (
        <Loading />
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
