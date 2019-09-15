import React from 'react';

import Date from './date';
  
function Job({data}) {

  const jobDuties = data.duties.length ? (
    data.duties.map((duty, index) => <li key={index}>{duty}</li>)
  ) : '';

  return(
    <section className="row">
      <div className="col s12 m7"> 
        <div className="card-content">
          <header>
            <h3 className="card-title">{data.employer}</h3>
            <p>
              {data.start ? (<Date />) : ''}
            </p>
          </header>
          <section>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
            {jobDuties.length ? (<ul>{jobDuties}</ul>) : ''}
          </section>
        </div>
      </div>
    </section>
  )
}

export default Job;
