import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavData } from './navData';

function MainNav() {
  return (
    <nav className="navbar bg-black align-items-start vh-100 mr-5">
      <ul className="navbar-nav">
        <li><button>X</button></li>
        {NavData.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <NavLink className="text-light nav-link p-3"
                exact
                to={item.path}>
                <span>{item.icon}</span>
                <span className="pl-3">{item.title}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default MainNav
