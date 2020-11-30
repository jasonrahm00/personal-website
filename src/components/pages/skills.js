import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'; 

function Skills() {
  useFirestoreConnect(['skills']);
  const skills = useSelector(state => state.firestore.data.skills);

  return(
    <>
      <h1>Skills</h1>
      { skills ? (
        <p>Loaded</p>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default Skills;
