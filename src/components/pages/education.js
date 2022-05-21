import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {FilledCard, BlankCard} from '../base/customCards';

function Education(props) {

  const {schools} = props;

  return(
    <Container component="main">
      <Typography variant="h1" component="h1">My Education</Typography>
      {isLoaded(schools) ? (
        Object.keys(schools).map(key => {
          let entry = schools[key];
          let data = {
            header: entry.school,
            subHeader: entry.degree + ' - ' + entry.major,
            dates: {
              start: entry.start,
              end: entry.end
            },
            description: [entry.description]
          }
          return (
            <FilledCard key={key} data={data}/>
          )
        })
      ) : (
        <BlankCard />
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
