import { extendTheme } from '@chakra-ui/react';
// import pallete from './utils/pallete';

const Table = {
  parts: ['td'],
  baseStyle: {
    td: {
      // borderBottomColor: 'gray'
      // fontSize: '3rem',
      // color: 'red.500'
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem'
    }
  }
};

const theme = extendTheme({
  components: {
    Table
  }
});

export default theme;
