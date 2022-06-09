import { Box, Text, VStack, Center } from '@chakra-ui/react';

import { ReactComponent as Graphic } from '../../assets/search.svg';

const SearchPrompt = () => (
  <Center>
    <VStack mt={14} align="center" spacing={5}>
      {/* SVG Graphic */}
      <Box maxW="230px" w="45%">
        <Graphic style={{ width: '100%', height: '100%' }} />
      </Box>

      {/* Prompt Text */}
      <Text textStyle="delta" color="neutral.400" textAlign="center">
        🔍 Select a state and a district to search for parlours
      </Text>
    </VStack>
  </Center>
);

export default SearchPrompt;
