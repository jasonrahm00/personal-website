import React from 'react';

import Job from '../reusable/job';

function Experience({jobs, navTarget}) {
  return(
    <section id={navTarget}>
      <h2>Experience</h2>
      <div>
        { jobs && jobs.map((job, index) => {
          return (
            <Job 
              key={index} 
              data={job}
            />
          )
        })}
      </div>
      
    </section>
  )
}

export default Experience;
