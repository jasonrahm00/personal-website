import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'; 
import Moment from 'moment';

function Education() {

  useFirestoreConnect(['education']);
  const education = useSelector(state => state.firestore.data.education);

  // function formatDate(start, end) {
  //   let dateString = '';
  //   dateString = start ? Moment(start.toDate()).format('MMMM DD, YYYY') : '';
  //   dateString += end ? ' - ' + Moment(end.toDate()).format('MMMM DD, YYYY') : ' - Present';
  //   return dateString;
  // }

  return(
    <>
      <h1>Education</h1>
      { education ? (
        <p>Loaded</p>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default Education;