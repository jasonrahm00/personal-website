import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem } from '@mui/material';

import { NavData } from './navData';

function MainNav() {
  return (
    <nav>
      <MenuList>
        {NavData && NavData.map((item, index) => {
        return (
          <MenuItem key={index}>
            <NavLink
              exact
              to={item.path}>
              <span aria-hidden="true">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          </MenuItem>
        )
      })}
      </MenuList>
    </nav>
  )
}

export default MainNav
