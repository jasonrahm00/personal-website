import React from 'react';
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
import Skeleton from '@mui/material/Skeleton';

const classes = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    padding: '2rem',
    justifyContent: {xs: 'center', md: 'flex-start'}
  },
  listItem: {
    width: 120,
    flexDirection: 'column',
    alginItems: 'center',
    textAlign: 'center'
  },
  listImage: {
    width: '100%',
    marginBottom: '1rem'
  },
  listBody: {
    marginTop: 'auto'
  }
}

const skeletonItems = () => {
  let items = [];
  for (let i = 0; i < 18; i++) {
    items.push(
      <ListItem disablePadding={true} sx={classes.listItem}>
        <Skeleton variant="rectangular" width={120} height={120} />
        <Skeleton width="100%" />
      </ListItem>
    )
  }
  return items;
}

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
            >
              <CardContent>
                <Box component="header">
                  <Typography variant="h2" component="h2" sx={{margin: 0}}>{group}</Typography>
                  <Divider/>
                </Box>
                <List 
                  aria-label={group} 
                  sx={classes.list}
                >
                  {groupedSkills[group].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1).map(skill => {
                    return (
                      <ListItem 
                        data-skill-id={skill.id} 
                        key={groupIndex + '-' + skill.id}
                        disablePadding={true}
                        sx={classes.listItem}
                      >
                        <Box 
                          component="img" 
                          src={skill.logo}
                          aria-hidden="true"
                          sx={classes.listImage}
                        />
                        <Typography 
                          component="span"
                          variant="body1"
                          sx={classes.listBody}
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
        ) : (
          <Card component="section" raised={true}>
            <CardContent>
              <Box component="header">
                <Skeleton height={60} width="35%" />
              </Box>
              <Divider/>
              <List sx={classes.list}>
                {skeletonItems()}
              </List>
            </CardContent>
          </Card>
        )
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
