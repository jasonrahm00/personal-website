import React from 'react';
import Moment from 'moment';

export default function Date({date, format}) {
  return(
    <>
      {Moment(date.toDate()).format(format ? format : 'MMMM DD, YYYY')}
    </>
  )
}
