import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './src/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers/index';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';


export default class App extends Component {

  componentWillMount(){
    let config = {
      apiKey: "AIzaSyDewWVuphSLud5fboj5YLOxWLQpozHuL6I",
      authDomain: "cinefilia-959ad.firebaseapp.com",
      databaseURL: "https://cinefilia-959ad.firebaseio.com",
      projectId: "cinefilia-959ad",
      storageBucket: "cinefilia-959ad.appspot.com",
      messagingSenderId: "718436623047"
    };
    firebase.initializeApp(config);
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Routes/>
      </Provider>
    );
  }
}