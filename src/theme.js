import { extendTheme } from '@chakra-ui/react';
import Table from './components/Table';
import Button from './components/common/Button';

const theme = extendTheme({
  components: {
    Table,
    Button
  },
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'Poppins', sans-serif`
  }
});

export default theme;
