import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons' ;

import Loading from '../base/loading';

function About(props) {

  const {about} = props;
  const icons = {
    linkedin: <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>,
    github: <FontAwesomeIcon icon={faGithub} size="2x"/>
  };

  return(
    <>
      <h1>Hello! I'm Jason Rahm</h1>
      {isLoaded(about) ? (
        <div className="d-flex justify-content-between flex-wrap">
          <div className="order-lg-2 headshot p-md-0" style={{width: "200px"}}>
            <img className="w-100" src={about.about.headshot} alt="Jason Rahm" />
          </div>
          <div className="order-lg-1 w-75">
            <p>{about.about.description}</p>
            <ul aria-label="Social Channels" className="list-unstyled d-flex">
              {about.about.social && about.about.social.map((entry, id) => (
                <li className="mr-4" key={id}>
                  <a href={entry.url} className="text-black" title={entry.channel} target="_blank" rel="noreferrer">
                    <span className="sr-only">{entry.channel}</span>
                    <span aria-hidden="true">{icons[entry.channel.toLowerCase()]}</span>
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
