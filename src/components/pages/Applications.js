import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FilledCard } from '../base/CustomCards';

const AppInfo = [
  {
    header: 'CON New Wireframe',
    subheader: 'Built in AngularJS',
    description: ['About the App'],
    links: [
      {github: '', demo: ''}
    ]
  },
  {
    header: 'ICS Wireframe',
    subheader: 'Built in ReactJS',
    description: ['About the App'],
    links: [
      {github: '', demo: ''}
    ]
  }
]
export default function Applications() {
  return (
    <Container component="main">
      <Typography variant="h1" component="h1">Custom Applications</Typography>
      <Typography paragraph={true}>Intro paragraph talking about my custom applications and how I basically have to get hack experience where i can because i cant use the frameworks in my real job</Typography>
      {AppInfo && AppInfo.map((app, i) => {
        let cardData = {
          header: app.header,
          subHeader: app.subheader,
          description: app.description
        }
        return <FilledCard key={i} data={cardData} />
      })}
    </Container>
  )
}
