import React from 'react';

function Projects({projects, id}) {
  return(
    <section id={id} className="py-5 container">
      <h2>Projects</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
        {projects && projects.map((project, index) => {
          return (
            <div className="col mb-4">
              <section key={index} className="card">
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer">
                  {
                    project.links && project.links.length ? 
                    (project.links.map((link, index) => <a href={link.url} key={index} className="card-link" rel="noreferrer" target="_blank">{link.text} for {project.title}</a>
                    )) : 
                    ''
                  }
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Projects;
