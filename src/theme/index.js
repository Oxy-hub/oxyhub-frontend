import { extendTheme } from '@chakra-ui/react';

import fonts from './fonts';
import colors from './colors';

const theme = extendTheme({
  ...colors,
  ...fonts
});

console.log({
  ...colors,
  ...fonts
});

export default theme;
