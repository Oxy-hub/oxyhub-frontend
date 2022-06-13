export default {
  parts: ['list', 'item'],
  baseStyle: {
    list: {
      boxShadow: '2xl',
      padding: '6px 4px'
    },
    item: {
      px: '4',
      py: '2',
      _hover: {
        backgroundColor: 'primary.100',
        borderRadius: 'md'
      }
    }
  }
};
