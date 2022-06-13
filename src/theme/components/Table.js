export default {
  parts: ['table', 'tr', 'th'],

  variants: {
    striped: ({ theme }) => ({
      th: {
        opacity: 0.5,
        paddingBottom: 4,
        fontFamily: 'inherit',
        borderColor: 'neutral.200',
        ...theme.textStyles.piBold
      },
      td: {
        ...theme.textStyles.omegaSemiBold
      },
      tr: {
        '&:nth-of-type(odd) td': {
          bgColor: `#eef9f9 !important`
        }
      }
    })
  }
};
