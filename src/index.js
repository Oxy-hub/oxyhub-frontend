import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import firebaseConfig from './firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
