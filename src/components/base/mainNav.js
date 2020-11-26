import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavData } from './navData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function MainNav() {

  const [navbar, setNavbar] = useState(false);
  const showNav = () => setNavbar(!navbar);
  const menuButtonLabel = navbar ? 'Close Menu' : 'Open Menu';

  return (
    <nav className={"navbar bg-black d-block vh-100 mr-5 px-0 pb-0 pt-3" + (navbar ? ' open' : ' closed')}>
      <button aria-label={menuButtonLabel} title={menuButtonLabel} onClick={showNav}>
        <span className="bar-1" aria-hidden="true"></span>
        <span className="bar-2" aria-hidden="true"></span>
        <span className="bar-3" aria-hidden="true"></span>
      </button>
      <ul className="navbar-nav">
        {NavData && NavData.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <NavLink className="text-light d-flex align-items-center p-3"
                exact
                to={item.path}
                aria-label={item.title}
                title={item.title}>
                <span>{item.icon}</span>
                <span className="nav-text" aria-hidden="true">{item.title}</span>
                <span aria-hidden="true" className="active-icon pl-3"><FontAwesomeIcon icon={faChevronRight} /></span>
              </NavLink>
            </li>
          )
        })}
      </ul>      
    </nav>
  )
}

export default MainNav
