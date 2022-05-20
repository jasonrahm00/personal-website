import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import { NavData } from './navData';

function MainNav() {
  return (
    <AppBar 
      component="nav"
      sx={{
        backgroundColor: 'common.black',
        alignItems: 'center'
      }}
    >
      <MenuList 
        sx={{
          display: 'flex',
          padding: 0
        }}
      >
        {NavData && NavData.map((item, index) => {
          return (
            <MenuItem 
              key={index}
              tabIndex="-1"
              sx={{
                '&:hover': {
                  backgroundColor: 'primary.main'
                },
                '&.Mui-focusVisible': {
                  backgroundColor: 'primary.main'
                },
                padding: 0
              }}
            >
              <Button 
                href={item.path}
                disableRipple={true}
                sx={{
                  color: 'common.white',
                  padding: '1rem'
                }}
              >
                {item.icon}
                <Typography 
                  component="span"
                  variant='inherit' 
                  sx={{
                    lineHeight: '1'
                  }}
                >
                  {item.title}
                </Typography>
              </Button>
            </MenuItem>
          )
        })}
      </MenuList>
    </AppBar>
  )
}

export default MainNav
