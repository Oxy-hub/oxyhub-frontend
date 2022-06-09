import Select from 'react-select';
import { useTheme } from '@chakra-ui/react';

const Dropdown = props => {
  const { ...rest } = props;
  const theme = useTheme();

  const customStyles = {
    container: provided => ({
      ...provided
    }),
    control: provided => ({
      ...provided,
      boxShadow: 'none',
      border: 0,
      '&:hover': {
        cursor: 'pointer'
      }
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    valueContainer: provided => ({
      ...provided,
      padding: `${theme.space[4]} ${theme.space[5]}`
    }),
    placeholder: provided => ({
      ...provided,
      ...theme.textStyles.omega,
      color: theme.colors.neutral[300]
    }),
    singleValue: provided => ({
      ...provided,
      ...theme.textStyles.omega,
      color: theme.colors.neutral[800]
    }),
    menu: provided => ({
      ...provided,
      padding: `${theme.space[1.5]} ${theme.space[2.5]}`
    }),
    menuList: base => ({
      ...base,

      '::-webkit-scrollbar': {
        width: theme.space[3.5]
      },

      '::-webkit-scrollbar-track': {
        backgroundColor: theme.colors.neutral[0]
      },

      '::-webkit-scrollbar-thumb': {
        backgroundColor: theme.colors.neutral[200],
        borderRadius: theme.radii.xl,
        border: `4px solid ${theme.colors.neutral[0]}`
      }
    }),
    option: (provided, state) => ({
      ...provided,
      borderRadius: theme.radii.base,
      color: theme.colors.neutral[800],
      backgroundColor: state.isSelected && theme.colors.primary[100],
      '&:hover': {
        backgroundColor: theme.colors.primary[100],
        cursor: 'pointer'
      }
    })
  };
  return (
    <Select
      {...rest}
      isSearchable={false}
      styles={customStyles}
      menuPortalTarget={document.body}
    />
  );
};

export default Dropdown;
