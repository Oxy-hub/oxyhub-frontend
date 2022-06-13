import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Text,
  Image,
  Heading,
  HStack,
  VStack,
  SimpleGrid
} from '@chakra-ui/react';

import RadioSelect from './RadioSelect';
import parlour from '../../assets/parlour.png';
import { useGetItems } from '../../api/getItems';
import { useGetParlourDetails } from '../../api/getParlour';
import { LoadingSkeleton } from '../../../../components/Elements';
import { CylinderContext } from '../../providers/CylinderProvider';

const Details = () => {
  const { id } = useParams();
  const { choice, setItem, setVariants, setSku } = useContext(CylinderContext);

  const { data: parlourData, isLoading: isParlourLoading } =
    useGetParlourDetails(id);
  const { data: itemData, isLoading: isItemLoaading } = useGetItems(id);

  return (
    <SimpleGrid
      mb={10}
      columns={2}
      spacing={4}
      alignItems="center"
      templateColumns="5fr 7fr"
    >
      {/* Image Section */}
      <Box>
        <Image src={parlour} objectFit="stretch" m="0 auto" />
      </Box>

      {/* Parlour Details */}
      <VStack spacing={10} w="100%" align="flex-start">
        {/* Parlour Name */}
        {isParlourLoading ? (
          <LoadingSkeleton height={35} />
        ) : (
          <Box>
            <Heading textStyle="alpha" as="h1">
              {parlourData.data.name}
            </Heading>
          </Box>
        )}

        {/* Parlour Location */}
        {isParlourLoading ? (
          <LoadingSkeleton count={3} />
        ) : (
          <VStack spacing={2} align="flex-start">
            <Text textStyle="delta" as="h3">
              {parlourData.data.location.address}
            </Text>
            <Text textStyle="delta" as="h3">
              {parlourData.data.location.district}
            </Text>
            <Text textStyle="delta" as="h3">
              {`${parlourData.data.location.state_code} - ${parlourData.data.location.pincode}`}
            </Text>
          </VStack>
        )}

        {/* Parlour Proprietor */}
        <VStack spacing={2.5} w="100%" align="flex-start">
          {isParlourLoading ? (
            <LoadingSkeleton height={30} />
          ) : (
            <Text textStyle="omegaSemibold">Proprietor :</Text>
          )}

          {isParlourLoading ? (
            <LoadingSkeleton count={2} />
          ) : (
            <VStack spacing={1} align="flex-start">
              <Text textStyle="omega">{parlourData.data.owner_name}</Text>
              <Text textStyle="omega">{parlourData.data.owner_contact}</Text>
            </VStack>
          )}
        </VStack>

        {/* Cylinder Type */}
        <VStack spacing={4} w="100%" align="flex-start">
          {isItemLoaading ? (
            <LoadingSkeleton />
          ) : (
            <Text textStyle="omegaSemibold">Types</Text>
          )}

          {isItemLoaading ? (
            <LoadingSkeleton height={25} />
          ) : (
            <HStack spacing={6}>
              {itemData.data.items.map(item => (
                <RadioSelect
                  onClick={() => {
                    setVariants(item.variants);
                    setItem(item.cylinder_type.value);
                    if (choice.sku !== null) setSku(null);
                  }}
                  isActive={choice.type === item.cylinder_type.value}
                >
                  {item.cylinder_type.label}
                </RadioSelect>
              ))}
            </HStack>
          )}
        </VStack>
      </VStack>
    </SimpleGrid>
  );
};

export default Details;
