import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'; 
import Moment from 'moment';

function Experience() {

  useFirestoreConnect(['jobs']);
  const jobs = useSelector(state => state.firestore.data.jobs);

  // function formatDate(start, end) {
  //   let dateString = '';
  //   dateString = start ? Moment(start.toDate()).format('MMMM DD, YYYY') : '';
  //   dateString += end ? ' - ' + Moment(end.toDate()).format('MMMM DD, YYYY') : ' - Present';
  //   return dateString;
  // }

  return(
    <>
      <h1>Experience</h1>
      { jobs ? (
        <p>Loaded</p>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default Experience;
