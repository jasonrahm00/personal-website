import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavData } from './navData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function MainNav() {
  return (
    <nav className="navbar bg-black d-block vh-100 mr-5 p-0">
      <button className="mx-3" aria-label="Close Menu" title="Close Menu">X</button>
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
                <span className="pl-3" aria-hidden="true">{item.title}</span>
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
