import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import PropType from 'prop-types';

import reduxStore from '../store';
import chakraTheme from '../theme';
import pallete from '../utils/pallete';
import queryClient from '../lib/react-query';

const Providers = ({ children }) => (
  <BrowserRouter>
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={chakraTheme}>
          <ThemeProvider theme={pallete}>
            {/* Implement React Helmet Here... */}
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);

export default Providers;

Providers.propTypes = {
  children: PropType.element.isRequired
};
