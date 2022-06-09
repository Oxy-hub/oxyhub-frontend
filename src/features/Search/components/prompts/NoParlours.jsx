import { Box, Text, Center, VStack } from '@chakra-ui/react';

import { ReactComponent as Graphic } from '../../assets/no-data.svg';

const NoParloursPrompt = () => (
  <Center>
    <VStack mt={14} align="center" spacing={5}>
      {/* SVG Graphic */}
      <Box maxW="230px" w="45%">
        <Graphic style={{ width: '100%', height: '100%' }} />
      </Box>

      {/* Prompt Text */}
      <Text textStyle="delta" color="neutral.400" textAlign="center">
        Sorry 😔. No parlours available in this district
      </Text>
    </VStack>
  </Center>
);

export default NoParloursPrompt;
