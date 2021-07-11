import React from 'react';
import AppRoutes from './routes';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
