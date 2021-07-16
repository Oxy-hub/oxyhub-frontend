import React from 'react';
import ReactDom from 'react-dom';
import firebaseConfig from './utils/firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDom.render(<App />, document.getElementById('root'));
