import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CopyrightIcon from '@mui/icons-material/Copyright';

const thisYear = new Date().getFullYear();

export default function MainFooter() {
  return(
    <Box sx={{backgroundColor: 'common.black'}}>
      <Container 
        component="footer"
      >
        <Typography 
          paragraph={true}
          sx={{
            color: 'common.white',
            margin: '0',
            padding: '1rem 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span className='sr-only'>Copyright</span>
          <CopyrightIcon 
            aria-hidden="true" 
            fontSize='inherit'
          />
          &nbsp;
          {thisYear} Jason Rahm
        </Typography>
      </Container>
    </Box>
    
  )
}
