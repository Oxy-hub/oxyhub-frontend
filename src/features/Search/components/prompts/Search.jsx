import { Box, Text, VStack } from '@chakra-ui/react';

import { ReactComponent as Graphic } from '../../assets/search.svg';

const SearchPrompt = () => (
  <VStack mt={12} align="center" spacing={5}>
    {/* SVG Graphic */}
    <Box maxW="200px" w="40%">
      <Graphic style={{ width: '100%', height: '100%' }} />
    </Box>

    {/* Prompt Text */}
    <Text textStyle="delta" color="neutral.400" textAlign="center">
      🔍 Select a state and a district to search for parlours
    </Text>
  </VStack>
);

export default SearchPrompt;
