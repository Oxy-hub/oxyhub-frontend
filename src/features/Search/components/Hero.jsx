import { FaShoppingCart } from 'react-icons/fa';
import { Text, HStack, Container } from '@chakra-ui/react';

const SearchForm = () => (
  <Container maxW="container.lg">
    <HStack py={20} spacing={4} justify="center">
      <FaShoppingCart fontSize="2.1em" color="white" />
      <Text textStyle="alpha" color="neutral.0" textAlign="center">
        Oxygen Cylinders, Now at your Fingertips
      </Text>
    </HStack>
  </Container>
);

export default SearchForm;
