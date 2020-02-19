import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons' ;

import headshot from '../assets/jason-rahm.jpg';

function About({about, id}) {

  const icons = {
    linkedin: <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>,
    github: <FontAwesomeIcon icon={faGithub} size="2x"/>
  };

  return(
    <div id={id} className="bg-primary text-white py-5">
      <div className="container">
        <div className="row">
          <header className="col-12 col-md-8 pr-4">
            <h1>Hi, I'm Jason Rahm</h1>
            <p>{about.description}</p>
            {
              about.social && about.social.length ? 
              (<ul className="list-unstyled mt-3 d-flex">
                {about.social.map((data, index) => {
                  return (
                    <li key={index}>
                      <a href={data.url} className="text-white mr-3" target="_blank" title={data.channel}>
                        <span aria-hidden="true">{icons[data.channel.toLowerCase()]}</span>
                        <span className="sr-only">{data.channel}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>) : 
              ''
            }
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
