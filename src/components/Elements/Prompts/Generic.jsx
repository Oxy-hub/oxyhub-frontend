import { Box, Text, Center, VStack } from '@chakra-ui/react';

import { ReactComponent as Graphic } from '../../../assets/error.svg';

const NoParloursPrompt = () => (
  <Center w="60%">
    <VStack mt={14} align="center" spacing={7}>
      {/* SVG Graphic */}
      <Box maxW="250px">
        <Graphic style={{ width: '100%', height: '100%' }} />
      </Box>

      {/* Prompt Text */}
      <Text textStyle="delta" color="neutral.400" textAlign="center">
        Oops 😅. Something went wrong!
      </Text>
    </VStack>
  </Center>
);

export default NoParloursPrompt;
