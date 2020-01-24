import React from 'react';

import headshot from '../assets/jason-rahm.jpg';

function About({about, id}) {
  return(
    <div id={id} className="bg-primary text-white py-5">
      <div className="container">
        <div className="row">
          <header className="col-12 col-md-8 pr-4">
            <h1>Hi, I'm Jason Rahm</h1>
            <p>{about}</p>
          </header>
          <div className="col-12 col-md-4 image-container">
            <img src={headshot} alt="Jason Rahm"/>
          </div>
        </div>
      </div>      
    </div>    
  )
}

export default About;
