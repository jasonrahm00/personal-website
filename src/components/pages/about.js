import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import Loading from '../base/loading';

function About(props) {

  const {about} = props;

  return(
    <main>
      <h1>Hi! I'm Jason Rahm</h1>
      {isLoaded(about) ? (
        <div>
          <div>
            <img src={about.about.headshot} alt="Jason Rahm" />
          </div>
          <div>
            <p>{about.about.description}</p>
            <ul aria-label="Social Channels">
              {about.about.social && about.about.social.map((entry, id) => (
                <li key={id}>
                  <a href={entry.url}  title={'My ' + entry.channel} target="_blank" rel="noreferrer">
                    <span>{'My ' + entry.channel}</span>
                    <span aria-hidden="true">{entry.channel.toLowerCase()}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </main>  
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
