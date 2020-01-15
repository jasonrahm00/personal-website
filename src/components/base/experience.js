import React from 'react';
import Moment from 'moment';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

function Experience({jobs, id}) {

  function formatDate(start, end) {
    let dateString = '';
    dateString = start ? Moment(start.toDate()).format('MMMM DD, YYYY') : '';
    dateString += end ? ' - ' + Moment(end.toDate()).format('MMMM DD, YYYY') : ' - Present';
    return dateString;
  }

  return(
<<<<<<< HEAD
    <section>
      <h2>Experience</h2>
      <div>
        { jobs && jobs.map((job, index) => {
          return (
            <Job 
              key={index} 
              data={job}
            />
          )
        })}
=======
    <section id={id} className="bg-light-gray py-5">
      <div className="container">
        <h2>Experience</h2>
        <VerticalTimeline>
          {jobs && jobs.map((job, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                date={formatDate(job.start, job.end)}
                icon={<FontAwesomeIcon icon={faBuilding} />}
              >
              <section>
                <header>
                  <h3 className="vertical-timeline-element-title">{job.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{job.employer}</h4>
                </header>
                <p>{job.description}</p>
              </section>
              </VerticalTimelineElement>
            )
            
          })}
        </VerticalTimeline>
>>>>>>> bootstrap-install
      </div>
    </section>
  )
}

export default Experience;
