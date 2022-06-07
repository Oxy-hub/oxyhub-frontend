import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  HStack,
  Button,
  Divider,
  Spacer,
  Flex
} from '@chakra-ui/react';
import parlourImg from '../../../assets/parlourImg.png';

const ParlourDetails = () => (
  <Box maxW="1100px" w="100%" m="0 auto" mt={20}>
    <SimpleGrid
      columns={2}
      spacing={4}
      templateColumns="5fr 7fr"
      alignItems="center"
      mb={10}
    >
      <Box>
        <Image
          src={parlourImg}
          objectFit="stretch"
          // border="2px solid red"
          m="0 auto"
        />
      </Box>
      <Box>
        <Heading textStyle="alpha" as="h1" mb={10}>
          The Best Parlour
        </Heading>

        <Box mb={10}>
          <Text textStyle="delta" as="h3">
            6422, Niero Glenns
          </Text>
          <Text textStyle="delta" as="h3">
            Bardhaman
          </Text>
          <Text textStyle="delta" as="h3">
            Andaman and Nicobar Islands
          </Text>
        </Box>

        <Box mb={10}>
          <Text textStyle="omegaSemibold" as="p" mb={2}>
            Proprietor :
          </Text>
          <Text textStyle="omega" as="p" mb={2}>
            Mr. Sabyasachi Karmakar
          </Text>
          <Text textStyle="omega" as="p">
            9156424259
          </Text>
        </Box>

        <Box>
          <Text textStyle="omegaSemibold" as="p" mb={4}>
            Variants
          </Text>
          <HStack spacing={6}>
            <Button variant="secondary">A</Button>
            <Button variant="secondary">B</Button>
            <Button variant="secondary">C</Button>
            <Button variant="secondary">D</Button>
          </HStack>
        </Box>
      </Box>
    </SimpleGrid>

    <Divider />

    <Flex mt={10}>
      <Box>Prices will be calculated in the next step ...</Box>
      <Spacer />
      <Button>Book Now</Button>
    </Flex>
  </Box>
);

export default ParlourDetails;
