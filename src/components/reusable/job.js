import React from 'react';
import Moment from 'moment';
  
function Job({data}) {

  const jobDuties = data.duties.length ? (
    data.duties.map((duty, index) => <li key={index}>{duty}</li>)
  ) : '';

  return(
    <section>
        <header>
          <h3>{data.employer}</h3>
          <p>
            {data.start ? Moment(data.start.toDate()).format('MMMM DD, YYYY') : ''}
            {data.end ? ' - ' + Moment(data.end.toDate()).format('MMMM DD, YYYY') : ' - Present'}
          </p>
        </header>
        <section>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          {jobDuties.length ? (<ul>{jobDuties}</ul>) : ''}
        </section>
    </section>
  )
}

export default Job;
