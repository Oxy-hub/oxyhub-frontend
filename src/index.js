import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import worker from './mocks/browser';

const prepareMSW = () => {
  if (process.env.REACT_APP_MOCK_API === 'true') {
    return worker.start();
  }
  return Promise.resolve();
};

prepareMSW().then(() => {
  ReactDom.render(<App />, document.getElementById('root'));
});
