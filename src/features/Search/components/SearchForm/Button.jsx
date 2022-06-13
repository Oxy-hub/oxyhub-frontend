import { Button as ChakraButton } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const Button = ({ ...rest }) => (
  <ChakraButton
    height="100%"
    // fontSize={3.5}
    px={10}
    py={4}
    borderRadius="2xl"
    backgroundColor="secondary.700"
    border="1px solid #FFFFFF"
    _hover={{ backgroundColor: 'secondary.600' }}
    _active={{ backgroundColor: 'secondary.700' }}
    _focus={{}}
    _disabled={{
      backgroundColor: 'neutral.150',
      color: 'neutral.600',
      _hover: { backgroundColor: 'neutral.150', cursor: 'not-allowed' }
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    Search
  </ChakraButton>
);

export default Button;
