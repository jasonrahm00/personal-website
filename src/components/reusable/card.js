import React from 'react';

// Data Needs
  //Image
  //Header
  //Text
  //Cta (anchor + link)
  //Second CTA?
  
function Card({data}) {
  return(
    <div className="row">
      <div className="col s12 m6">
        <div className="car blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              <p>CardContent</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;