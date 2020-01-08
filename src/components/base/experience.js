import React from 'react';

import Job from '../reusable/job';

function Experience({jobs, id}) {
  return(
    <section id={id} className="anchor">
      <h2>Experience</h2>
      { jobs && jobs.map((job, index) => {
        return (
          <Job 
            key={index} 
            data={job}
          />
        )
      })}
      
    </section>
  )
}

export default Experience;
