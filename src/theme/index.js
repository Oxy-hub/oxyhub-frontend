import { extendTheme } from '@chakra-ui/react';

import fonts from './fonts';
import sizes from './sizes';
import global from './global';
import colors from './colors';

const theme = extendTheme({
  ...fonts,
  ...sizes,
  ...colors,

  styles: {
    ...global
  }
});

console.log('Theme : ', theme);

export default theme;
