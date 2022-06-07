import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { Provider } from 'react-redux';
import { IconContext } from 'react-icons';
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
import LogoutAllTabs from '../components/wrappers/LogoutAllTabs';

const Providers = ({ children }) => (
  <BrowserRouter>
    <Provider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={chakraTheme}>
          <ThemeProvider theme={pallete}>
            <IconContext.Provider
              value={{ style: { verticalAlign: 'middle' } }}
            >
              {/* Implement React Helmet Here... */}
              <LogoutAllTabs>{children}</LogoutAllTabs>
              <ReactQueryDevtools initialIsOpen={false} />
            </IconContext.Provider>
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
