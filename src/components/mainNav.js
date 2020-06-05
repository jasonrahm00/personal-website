import React from 'react';

function MainNav() {

  return(
    <nav className="fixed-top">
      <div className="container">
        <ul className="nav justify-content-between">
          <li className="nav-item"><a href="#about" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
          <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default MainNav;