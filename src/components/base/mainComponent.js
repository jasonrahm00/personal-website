import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { Helmet } from 'react-helmet';

const MainComponent = ({component: Page, ...rest}) => {
  let {pages} = {...rest};
  let location = useLocation();
  return (
    <main>
      {isLoaded(pages) ? (
        Object.keys(pages).map((key, index) => {
          let page = pages[key];
          return page.url === location.pathname ? (
            <>
              <Helmet key={index}>
                <title>{location.pathname === '/' ? page.pageTitle : (page.pageTitle + ' | Jason Rahm')}</title>
                <meta name="description" content={page.metaDesc} />
              </Helmet>
              <h1>{page.contentTitle}</h1>
            </>
          ) : null;
        })
      ) : ''}
      <Route {...rest} render={props => <Page {...props} />}/>
    </main>
  )
}

export default compose(
  firestoreConnect(() => ['pages']),
  connect(state => {
    return {
      pages: state.firestore.data.pages
    }
  })
)(MainComponent);
