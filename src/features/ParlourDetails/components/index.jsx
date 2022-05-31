import { Box, SimpleGrid, Image } from '@chakra-ui/react';
import parlourImg from '../../../assets/parlourImg.png';

const ParlourDetails = () => (
  <Box maxW="1100px" w="100%" m="0 auto" border="2px solid black">
    <SimpleGrid columns={2} spacing={4} templateColumns="5fr 7fr">
      <Box>
        <Image
          src={parlourImg}
          objectFit="stretch"
          border="2px solid red"
          m="0 auto"
        />
      </Box>
      <Box bg="tomato">2</Box>
    </SimpleGrid>
  </Box>
);

export default ParlourDetails;
