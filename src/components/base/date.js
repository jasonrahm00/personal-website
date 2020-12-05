import React from 'react';
import Moment from 'moment';

function Date({date, format}) {

  return(
    <>
      {Moment(date.toDate()).format(format ? format : 'MMMM DD, YYYY')}
    </>
  )
}

export default Date;
