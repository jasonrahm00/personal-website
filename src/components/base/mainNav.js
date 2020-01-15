import React from 'react';

function MainNav() {

  return(
    <nav className="fixed-bottom">
      <div className="container">
        <ul className="nav justify-content-between">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
          <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
          <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default MainNav;