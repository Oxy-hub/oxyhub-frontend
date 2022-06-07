export default {
  baseStyle: {
    fontWeight: 700,
    borderRadius: '0.25rem',
    _disabled: {
      backgroundColor: 'neutral.150',
      color: 'neutral.600'
    }
  },
  sizes: {
    s: {
      fontSize: 3,
      px: 4,
      py: 2
    },
    m: {
      fontSize: '0.875rem',
      px: 4,
      py: 2.5
    },
    l: {
      fontSize: 3.5,
      px: 4,
      py: 3
    }
  },
  variants: {
    primary: {
      backgroundColor: 'primary.600',
      color: 'neutral.0',
      _hover: {
        backgroundColor: 'primary.500'
      },
      _active: {
        backgroundColor: 'primary.700'
      },
      _focus: {
        border: '4px solid #FFFFFF'
      }
    },
    secondary: {
      backgroundColor: 'primary.100',
      border: '1px solid #FFD7D1',
      color: 'primary.600',

      _hover: {
        backgroundColor: 'neutral.0'
      },
      _active: {
        backgroundColor: 'neutral.0',
        border: '1px solid #FF725E'
      },
      _focus: {
        backgroundColor: 'primary.100',
        border: '4px solid #FFFFFF'
      }
    }
  },
  defaultProps: {
    size: 'm',
    variant: 'primary'
  }
};
