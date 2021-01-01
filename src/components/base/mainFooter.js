import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const thisYear = new Date().getFullYear();

function MainFooter() {
  return(
    <footer className="bg-black">
      <div>
        <p className="text-white">
          <span>
            <span className="sr-only">Copyright</span>
            <span aria-hidden="true"><FontAwesomeIcon icon={faCopyright}/></span>
            &nbsp;
          </span>
          <span>{thisYear} Jason Rahm</span>
        </p>
      </div>
    </footer>
  )
}

export default MainFooter;
