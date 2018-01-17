import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import * as FIREBASE_CONFIG from '../firebase_config';

import reducers from './reducers';

import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props);
    // initialize firebase using given configuration
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  render() {
    // createStore(reducer, initial state, store enhancer)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
