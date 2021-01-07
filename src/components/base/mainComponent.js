import React from 'react';
import { Route } from 'react-router-dom';

const MainComponent = ({component: Page, ...rest}) => {
  return (
    <main>
      <Route {...rest} render={props => <Page {...props} />}/>
    </main>
  )
}

export default MainComponent;
