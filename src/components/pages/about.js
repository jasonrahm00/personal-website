import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'; 

import headshot from '../../assets/jason-rahm.jpg';
import Loading from '../base/loading';

function About() {

  useFirestoreConnect([{collection: 'about', doc: 'about'}]);
  const about = useSelector(
    ({ firestore: { data } }) => data.about && data.about['about']
  );

  return(
    <>
      <h1>About</h1>
      <img src={headshot} alt="Jason Rahm" />
      {isLoaded(about) ? (
        <>
          <p>{about.description}</p>
          <ul>
            {about.social && about.social.map((entry, id) => (
              <li key={id}>
                <span>{entry.channel}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Loading />
      )}
    </>  
  )
}

export default About;
