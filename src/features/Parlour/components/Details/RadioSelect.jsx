import { Button } from '@chakra-ui/react';

const RadioSelect = props => {
  // eslint-disable-next-line react/prop-types
  const { children, ...rest } = props;
  console.log();
  return (
    <Button
      {...rest}
      _focus={{}}
      borderWidth="1px"
      color="primary.600"
      bgColor="neutral.100"
      borderColor="primary.600"
      _hover={{ bgColor: 'primary.600', color: 'primary.100' }}
      _active={{ bgColor: 'primary.600', color: 'primary.100' }}
    >
      {children}
    </Button>
  );
};

export default RadioSelect;
