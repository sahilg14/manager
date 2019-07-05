import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCH6OW4dcR7Qw348giUyKI-mjlY-dsLLBQ',
      authDomain: 'manager-1f763.firebaseapp.com',
      databaseURL: 'https://manager-1f763.firebaseio.com',
      projectId: 'manager-1f763',
      storageBucket: 'manager-1f763.appspot.com',
      messagingSenderId: '151235224475',
      appId: '1:151235224475:web:6279ceb73b7756d1'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
