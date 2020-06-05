import React from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;

// Use react-scroll and reference example site source files

const navLinks = [
  {
    label: 'Home',
    target: 'about',
    icon: ''
  },
  {
    label: 'Experience',
    target: 'exp',
    icon: ''
  },
  {
    label: 'Skills',
    target: 'skills',
    icon: ''
  },
]

function MainNav() {

  return(
    <nav className="fixed-top">
      <div className="container">
        <ul className="nav justify-content-between">
          {navLinks.map((link, i) => {
            return (
              <li className="nav-item" key={i}>
                <Link 
                  to={link.target} 
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  activeClass="active"
                  duation={500}
                  offset={-50}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default MainNav;