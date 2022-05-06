import React from 'react';

const thisYear = new Date().getFullYear();

function MainFooter() {
  return(
    <footer>
      <div>
        <p>
          <span>
            <span>Copyright</span>
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
