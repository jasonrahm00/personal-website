import React from 'react';

import Card from '../reusable/card';

function Projects({projects}) {
  return(
    <section>
      <h2>Projects</h2>
      { projects && projects.map((project, index) => {
        return (
          <Card 
            key={index} 
            data={project}
          />
        )
      })}
    </section>
  )
}

export default Projects;
