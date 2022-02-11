import React from 'react';

const thisYear = new Date().getFullYear();

function MainFooter() {
  return(
    <footer className="bg-black">
      <div>
        <p className="text-white">
          <span>
            <span className="sr-only">Copyright</span>
            <span aria-hidden="true"></span>
            &nbsp;
          </span>
          <span>{thisYear} Jason Rahm</span>
        </p>
      </div>
    </footer>
  )
}

export default MainFooter;
