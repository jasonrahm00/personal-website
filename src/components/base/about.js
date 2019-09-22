import React from 'react';

function About({about, qualifications}) {
  
  const qualificationList = qualifications.length ? (
    qualifications.map((data, index) => <li key={index}>{data}</li>)
  ) : '';

  return(
    <section>
      <h2>About</h2>
      <div className="container">
        <p>{about}</p>
        {qualifications.length ? (<ul className="browser-default">{qualificationList}</ul>) : ''}
      </div>
    </section>
  )
}

export default About;
