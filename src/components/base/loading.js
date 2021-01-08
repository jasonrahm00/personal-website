import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons' ;

function Loading() {

  return(
    <div className="text-center">
      <h2>Loading</h2>
      <FontAwesomeIcon icon={faCog} size="2x" spin aria-hidden="true"/>
    </div>
  )
}

export default Loading;
