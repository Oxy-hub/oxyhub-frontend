export default {
  global: {
    html: {
      height: '100%'
    },
    a: {
      textDecoration: 'none'
    },
    body: {
      height: '100%',
      bg: 'neutral.100',
      '& #root': {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column'
      }
    },
    '*::selection': {
      color: 'white',
      background: 'primary.700'
    },
    '.skeleton-flex-grow-1': {
      width: '100%'
    }
  }
};
