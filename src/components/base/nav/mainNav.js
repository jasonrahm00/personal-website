import React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

import { NavData } from './navData';

function MainNav() {
  return (
    <AppBar component="div">
      <MenuList component="nav">
        {NavData && NavData.map((item, index) => {
        return (
          <MenuItem key={index}>
            <Button href={item.path}>{item.title}</Button>
            {/* <NavLink
              exact
              to={item.path}>
              <span aria-hidden="true">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink> */}
          </MenuItem>
        )
      })}
      </MenuList>
    </AppBar>
  )
}

export default MainNav
