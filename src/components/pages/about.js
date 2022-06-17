import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Skeleton from '@mui/material/Skeleton';

const iconStyles = {fontSize: '2.5rem', color: 'primary.main'}
const socialIcons = {
  linkedin: <LinkedInIcon sx={iconStyles} />,
  github: <GitHubIcon sx={iconStyles} />
}

function About(props) {

  const {about} = props;

  return(
    <Container component="main">
      <Typography variant="h1" component="h1">Hi! I'm Jason Rahm</Typography>
      {isLoaded(about) ? (
        <Grid container direction='row-reverse' columnSpacing={12} rowSpacing={3}>
          <Grid item xs={12} md={4} sx={{textAlign: 'center'}}>
            <Box 
              component="img"
              alt="Jason Rahm"
              src={about.about.headshot}
              sx={{
                height: 300,
                width: 300,
                maxWidth: {xs: 250, md: 300},
                maxHeight: {xs: 250, md: 300}
              }}
            />
          </Grid>
          <Grid item xs={12} md={8} sx={{margin: 'auto'}}>
            <Typography paragraph={true}>{about.about.description}</Typography>
            <List 
              aria-label="Social Channels" 
              sx={{
                display: 'flex', 
                justifyContent: 'flex-start'
              }}
            >
              {about.about.social && about.about.social.map((entry, id) => (
                <ListItem 
                  key={id} 
                  sx={{width: 'auto'}}
                >
                  <Button 
                    href={entry.url} 
                    title={'My ' + entry.channel} 
                    rel="noreferrer"
                  >
                    <span className='sr-only'>{'My ' + entry.channel}</span>
                    {socialIcons[entry.channel.toLowerCase()]}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      ) : (
        <Grid container direction='row-reverse' columnSpacing={12} rowSpacing={3}>
          <Grid item xs={12} md={4} sx={{textAlign: 'center'}}>
            <Skeleton variant="rectangular" height={250} width={250} sx={{margin: {xs: '0 auto', md: 'unset'}}}/>
          </Grid>
          <Grid item xs={12} md={8} sx={{margin: 'auto'}}>
            <Skeleton variant="rectangular" height={120} width={{xs: '100%', md: '600px'}} />
            <List sx={{display: 'flex', justifyContent: 'flex-start'}}>
              <ListItem sx={{width: 'auto'}}><Skeleton variant="circular" width={35} height={35}/></ListItem>
              <ListItem sx={{width: 'auto'}}><Skeleton variant="circular" width={35} height={35}/></ListItem>
            </List>
          </Grid>
        </Grid>
      )}
    </Container>  
  )
}

export default compose(
  firestoreConnect(() => [{collection: 'about', doc: 'about'}]),
  connect(state => {
    return {
      about: state.firestore.data.about
    }
  })
)(About);
