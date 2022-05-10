import React from 'react';
// import { createRoot } from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';
import App from './App';
// import config from './config';
// import worker from './mocks/browser';

// const prepareMSW = () => {
//   if (config.enableMock === 'true') {
//     return worker.start();
//   }
//   return Promise.resolve();
// };

// prepareMSW().then(() => {
//   ReactDom.render(<App />, document.getElementById('root'));
// });

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
