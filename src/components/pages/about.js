import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';

import Loading from '../base/loading';

function About(props) {

  const {about} = props;

  return(
    <>
      {isLoaded(about) ? (
        <div className="about d-flex justify-content-center justify-content-lg-between flex-wrap mt-5">
          <div className="order-lg-2 headshot">
            <img className="w-100" src={about.about.headshot} alt="Jason Rahm" />
          </div>
          <div className="main-content order-lg-1 d-flex flex-wrap">
            <p className="w-100">{about.about.description}</p>
            <ul aria-label="Social Channels" className="list-unstyled d-flex align-self-end">
              {about.about.social && about.about.social.map((entry, id) => (
                <li className="mr-4" key={id}>
                  <a href={entry.url} className="text-black" title={'My ' + entry.channel} target="_blank" rel="noreferrer">
                    <span className="sr-only">{'My ' + entry.channel}</span>
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
