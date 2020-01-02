import React from 'react';

import Card from '../reusable/card';

function Projects({projects, navTarget}) {
  return(
    <section id={navTarget}>
      <h2>Projects</h2>
      <div>
          { projects && projects.map((project, index) => {
            return (
              <Card 
                key={index} 
                data={project}
              />
            )
          })}
        </div>      
    </section>
  )
}

export default Projects;
