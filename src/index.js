import ReactDom from 'react-dom';
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

// React-18
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

ReactDom.render(<App />, document.getElementById('root'));
