import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import Loading from '../base/loading';

function About(props) {

  const {about} = props;

  // useFirestoreConnect([{collection: 'about', doc: 'about'}]);
  // const about = useSelector(
  //   ({ firestore: { data } }) => data.about && data.about['about']
  // );

  return(
    <>
      <h1>About</h1>
      {isLoaded(about) ? (
        <>
          <img src={about.about.headshot} alt="Jason Rahm" />
          <p>{about.about.description}</p>
          <ul aria-label="Social Channels">
            {about.about.social && about.about.social.map((entry, id) => (
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

export default compose(
  firestoreConnect(() => [{collection: 'about', doc: 'about'}]),
  connect(state => {
    return {
      about: state.firestore.data.about
    }
  })
)(About);
