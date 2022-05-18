import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

import firebase from './config/firebase';
import { store } from './store/store';
import App from './App';

const rrfProps = {
  firebase, 
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}     

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
  ,
  document.getElementById('root')
);