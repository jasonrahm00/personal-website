import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';

import Date from './date';

export const FilledCard = ({...props}) => {
  return(
    <Card component="section" raised={true}>
      <CardContent>
        <Box component="header">
          <Typography variant="h2" component="h2">{props.data.header}</Typography>
          <Typography variant="h3" component="h3">{props.data.subHeader}</Typography>
          <Typography paragraph={true} sx={{marginBottom: '1rem'}}>
            {props.data.dates.start ? <Date date={props.data.dates.start} format='MMMM YYYY' /> : ''} 
            &nbsp;-&nbsp; 
            {props.data.dates.end ? <Date date={props.data.dates.end} format='MMMM YYYY' /> : 'Present'}
          </Typography>
        </Box>
        <Divider/>
        {props.data.description && props.data.description.map((description, id) => {
          return (
            <Typography paragraph={true} key={id}>{description}</Typography>
          )
        })}
        {props.footerContent ? props.footerContent : ''}
      </CardContent>
    </Card>
  )
}

export const BlankCard = ({...props}) => {
  return(
    <Card component="section" raised={true}>
      <CardContent>
        <Box component="header">
          <Skeleton height={60} width="35%" />
          <Skeleton height={60} width="35%"/>
          <Skeleton height={40} width="20%" sx={{marginBottom: '1rem'}}/>
        </Box>
        <Divider sx={{marginBottom: '1rem'}}/>
        <Skeleton variant="rectangular" width="100%" height="150px" />
      </CardContent>
    </Card>
  )
}
