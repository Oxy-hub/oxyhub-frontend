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
  Flex,
  useDisclosure
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import parlourImg from '../../../assets/parlourImg.png';
import BookNowModal from './BookNowModal';
import { useGetItems } from '../api/getItems';
import { useGetParlourDetails } from '../api/getParlour';

const ParlourDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const { data: parlourData, isLoading: isParlourLoading } =
    useGetParlourDetails(id);
  const { data: itemsData, isLoading: isItemLoading } = useGetItems(id);

  console.log(itemsData);

  // itemsData.data.items.map(item => console.log(item));

  if (isParlourLoading && isItemLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <Box maxW="1100px" w="100%" m="0 auto" mt={20}>
      <SimpleGrid
        columns={2}
        spacing={4}
        templateColumns="5fr 7fr"
        alignItems="center"
        mb={10}
      >
        <Box>
          <Image src={parlourImg} objectFit="stretch" m="0 auto" />
        </Box>
        <Box>
          <Heading textStyle="alpha" as="h1" mb={10}>
            {parlourData.data.name}
          </Heading>

          <Box mb={10}>
            <Text textStyle="delta" as="h3">
              {parlourData.data.location.address}
            </Text>
            <Text textStyle="delta" as="h3">
              {parlourData.data.location.district}
            </Text>
            <Text textStyle="delta" as="h3">
              {`${parlourData.data.location.state_code} - ${parlourData.data.location.pincode}`}
            </Text>
          </Box>

          <Box mb={10}>
            <Text textStyle="omegaSemibold" as="p" mb={2}>
              Proprietor :
            </Text>
            <Text textStyle="omega" as="p" mb={2}>
              {parlourData.data.owner_name}
            </Text>
            <Text textStyle="omega" as="p">
              {parlourData.data.owner_contact}
            </Text>
          </Box>

          <Box>
            <Text textStyle="omegaSemibold" as="p" mb={4}>
              Types
            </Text>
            <HStack spacing={6}>
              {/* {itemsData.data.items.map(item => (
                <Button variant="secondary">{item.cylinder_type.label}</Button>
              ))} */}
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>

      <Divider />

      <Flex mt={10}>
        <Box>Prices will be calculated in the next step ...</Box>
        <Spacer />
        <Button onClick={onOpen}>Book Now</Button>
      </Flex>

      <BookNowModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ParlourDetails;
