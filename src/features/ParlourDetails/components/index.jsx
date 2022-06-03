import { Box, SimpleGrid, Image, Heading, Text } from '@chakra-ui/react';
import parlourImg from '../../../assets/parlourImg.png';

const ParlourDetails = () => (
  <Box maxW="1100px" w="100%" m="0 auto" border="2px solid black">
    <SimpleGrid
      columns={2}
      spacing={4}
      templateColumns="5fr 7fr"
      alignItems="center"
    >
      <Box>
        <Image
          src={parlourImg}
          objectFit="stretch"
          border="2px solid red"
          m="0 auto"
        />
      </Box>
      <Box border="2px solid red">
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
          <Text textStyle="omegaSemibold" as="p">
            Proprietor :
          </Text>
          <Text textStyle="omega" as="p">
            Mr. Sabyasachi Karmakar
          </Text>
          <Text textStyle="omega" as="p">
            9156424259
          </Text>
        </Box>

        <Box>
          <Text textStyle="omegaSemibold" as="p">
            Variants
          </Text>
        </Box>
      </Box>
    </SimpleGrid>
  </Box>
);

export default ParlourDetails;
