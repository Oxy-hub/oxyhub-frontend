import {
  Box,
  HStack,
  Icon,
  Heading
  // Center
  // VStack,
  // Image,
  // StackDivider,
  // Text,
  // Flex
} from '@chakra-ui/react';
import { RiDraftLine } from 'react-icons/ri';
import pallete from '../../../utils/pallete';
// import oxyCyl from '../../../assets/ox_cyl.png';

const Orders = () => {
  console.log('');
  return (
    <Box sx={{ maxWidth: '1000px', border: '2px solid blue' }} m="0 auto">
      <Box>
        <HStack spacing="15px">
          <Icon as={RiDraftLine} boxSize={10} color={`${pallete.primary}`} />
          <Heading color={`${pallete.fontBlack}`} as="h3" size="lg">
            My Orders . . .
          </Heading>
        </HStack>
      </Box>
    </Box>
  );
};

export default Orders;
