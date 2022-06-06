export default {
  parts: ['footer', 'dialog'],
  baseStyle: ({ theme }) => ({
    dialog: { px: 4 },

    footer: {
      px: 0,
      borderTop: `1px solid ${theme.colors.neutral[150]}`
    }
  })
};
