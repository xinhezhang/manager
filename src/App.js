import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import * as FIREBASE_CONFIG from './firebase_config';

import reducers from './reducers';

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
          <Text>
            Hello World
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
