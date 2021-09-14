import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import { Helmet } from 'react-helmet';
import queryClient from './lib/react-query';
import './app.scss';
import store from './store';
import AppRoutes from './routes';

const App = () => {
  // Web Font Loader
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins:400,500,600,700']
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Helmet title="Oxyhub - Book Oxygen Cylinders Online" />
          <AppRoutes />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
