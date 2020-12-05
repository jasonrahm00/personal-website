import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'; 

import Loading from '../base/loading';

function Skills() {
  useFirestoreConnect(['skills']);
  const data = useSelector(state => state.firestore.data.skills);

  //TODO
    //Group be collection before outputting to page

  return(
    <>
      <h1>Skills</h1>
      {isLoaded(data) ? (
        <ul>
          {Object.keys(data).map((key, id) => (
            <li key={key}>{data[key].title}</li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Skills;
