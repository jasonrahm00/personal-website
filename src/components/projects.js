import React from 'react';

function Projects({projects, id}) {
  return(
    <section id={id} className="py-5 container">
      <h2>Projects</h2>
      <div className="row">
        {projects && projects.map((project, index) => {
          return (
            <section key={index} className="card col-12 col-md-4">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                {
                  project.links && project.links.length ? 
                  (project.links.map((link, index) => <a href={link.url} key={index} className="card-link" rel="noreferrer" target="_blank">{link.text} for {project.title}</a>
                  )) : 
                  ''
                }
              </div>
            </section>
          );
        })}
      </div>
    </section>
  )
}

export default Projects;
