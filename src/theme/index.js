import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { extendTheme } from '@chakra-ui/react';

import fonts from './fonts';
import sizes from './sizes';
import global from './global';
import colors from './colors';
import components from './components';

const theme = extendTheme({
  ...fonts,
  ...sizes,
  ...colors,
  ...components,

  styles: {
    ...global
  }
});

export default theme;
