import React from 'react';

const thisYear = new Date().getFullYear();

function MainFooter() {

  return(
    <footer>
      <p>{thisYear} Jason Rahm</p>
    </footer>
  )
}

export default MainFooter;