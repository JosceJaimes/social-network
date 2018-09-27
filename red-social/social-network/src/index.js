import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyD0SST1fiFu7-sZEufm7eOgY3aNhjVl164",
    authDomain: "my-social-network-c91b8.firebaseapp.com",
    databaseURL: "https://my-social-network-c91b8.firebaseio.com",
    projectId: "my-social-network-c91b8",
    storageBucket: "my-social-network-c91b8.appspot.com",
    messagingSenderId: "442659443450"
});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



//Bracket pair colorized