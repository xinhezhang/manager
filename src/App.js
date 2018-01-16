import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import * as FIREBASE_CONFIG from '../firebase_config';

import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    // initialize firebase using given configuration
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
