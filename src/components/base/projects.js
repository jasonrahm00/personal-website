import React from 'react';

import Card from '../reusable/card';

function Projects({projects, id}) {
  return(
    <section id={id} className="anchor">
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
