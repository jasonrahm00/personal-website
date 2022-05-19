import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

import Date from '../base/date';
import Loading from '../base/loading';

function Education(props) {

  const {schools} = props;

  return(
    <Container component="main">
      <Typography variant="h1" component="h1">My Education</Typography>
      { isLoaded(schools) ? (
        Object.keys(schools).map(key => {
          let entry = schools[key];
          return (
            <Card key={key} component="section" raised={true}>
              <CardContent>
                <Box component="header" sx={{borderBottom: '1px solid grey[700]'}}>
                  <Typography variant="h2" component="h2">{entry.school}</Typography>
                  <Typography variant="h3" component="h3">{entry.degree} - {entry.major}</Typography>
                  <Typography paragraph="true">{entry.start ? <Date date={entry.start} format='MMMM YYYY' /> : ''} - {entry.end ? <Date date={entry.end} format='MMMM YYYY' /> : 'Present'}</Typography>
                </Box>
                <Typography paragraph="true">{entry.description}</Typography>
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
  firestoreConnect(() => ['education']),
  connect(state => {
    return {
      schools: state.firestore.data.education
    }
  })
)(Education);
