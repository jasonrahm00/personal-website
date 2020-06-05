import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons' ;

const thisYear = new Date().getFullYear();

function MainFooter() {

  return(
    <footer className="container p-2">
      <p className="text-center my-2"><FontAwesomeIcon icon={faCopyright}/>{thisYear} Jason Rahm</p>
    </footer>
  )
}

export default MainFooter;