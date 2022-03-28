import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
import queryClient from './lib/react-query';
import './app.scss';
import store from './store';
import pallete from './utils/pallete';
import AppRoutes from './routes';
import theme from './theme';

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
          <ThemeProvider theme={pallete}>
            <Helmet title="Oxyhub - Book Oxygen Cylinders Online" />
            <ChakraProvider theme={theme}>
              <AppRoutes />
            </ChakraProvider>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
