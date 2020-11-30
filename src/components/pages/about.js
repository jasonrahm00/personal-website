import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'; 

import headshot from '../../assets/jason-rahm.jpg';

function About({content}) {

  useFirestoreConnect(['about']);
  const about = useSelector(state => state.firestore.data.about);

  return(
    <>
      <h1>About</h1>
      { about ? (
        <p>Loaded</p>
      ) : (
        <p>Loading</p>
      )}
    </>  
  )
}

export default About;
