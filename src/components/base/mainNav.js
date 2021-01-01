import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavData } from './navData';

function MainNav() {
  return (
    <nav className="bg-black position-fixed w-100">
      <ul className="d-flex list-unstyled mb-0">
        {NavData && NavData.map((item, index) => {
        return (
          <li key={index}>
            <NavLink className="text-white d-flex align-items-center p-3 justify-content-center"
              exact
              to={item.path}>
              <span className="d-inline-block" aria-hidden="true">{item.icon}</span>
              <span className="pl-3 nav-link-text">{item.title}</span>
            </NavLink>
          </li>
        )
      })}
      </ul>
    </nav>
  )
}

export default MainNav
