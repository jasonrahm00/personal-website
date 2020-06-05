import React from 'react';

function Skills({skills, id}) {
  return(
    <section className="py-5">
      <div id={id} className="container">
        <h2>Skills</h2>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          {skills && skills.map((skill, index) => {
            return (
              <div className="col mb-4">
                <section key={index} className="card text-center">
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title">{skill.group}</h3>
                    <div className="card-text">
                      <ul className="list-unstyled">
                        {
                          skill.entries && skill.entries.length ? 
                          (skill.entries.sort().map((entry, index) => <li key={index}>{entry}</li>
                          )) : 
                          ''
                        }
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills;
