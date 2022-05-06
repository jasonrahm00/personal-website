import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavData } from './navData';

function MainNav() {
  return (
    <nav>
      <ul>
        {NavData && NavData.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              exact
              to={item.path}>
              <span aria-hidden="true">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          </li>
        )
      })}
      </ul>
    </nav>
  )
}

export default MainNav
