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
import Divider from '@mui/material/Divider';

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
    <Container component="main">
      <Typography variant="h1" component="h1">My Skills</Typography>
      { groupedSkills && groupedSkills !== null ? (
        Object.keys(groupedSkills).map((group, groupIndex) => {
          return (
            <Card 
              key={groupIndex} 
              component="section" 
              raised={true}
              sx={{
                marginBottom: '3rem'
              }}
            >
              <CardContent>
                <Box component="header">
                  <Typography variant="h2" component="h2" sx={{margin: 0}}>{group}</Typography>
                  <Divider sx={{margin: '1rem 0'}}/>
                </Box>
                <List 
                  aria-label={group} 
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4rem',
                    padding: '2rem',
                    justifyContent: {xs: 'center', md: 'flex-start'}
                  }}
                >
                  {groupedSkills[group].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1).map(skill => {
                    return (
                      <ListItem 
                        data-skill-id={skill.id} 
                        key={groupIndex + '-' + skill.id}
                        disablePadding={true}
                        sx={{
                          width: 120,
                          flexDirection: 'column',
                          alginItems: 'center',
                          textAlign: 'center'
                        }}
                      >
                        <Box 
                          component="img" 
                          src={skill.logo}
                          aria-hidden="true"
                          sx={{
                            width: '100%',
                            marginBottom: '1rem'
                          }}
                        />
                        <Typography 
                          component="span"
                          variant="body1"
                          sx={{
                            marginTop: 'auto'
                          }}
                        >
                          {skill.title}
                        </Typography>
                      </ListItem>
                    )
                  })}
                </List>
              </CardContent>
              
            </Card>
          )
        })
        ) : 
        ''
      }
    </Container>
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
