import { Box, VStack, Image, Heading } from '@chakra-ui/react';

import pallete from '../../../utils/pallete';
import UC from '../assets/under-construction.svg';

// eslint-disable-next-line import/prefer-default-export
export const UnderConstruction = () => (
  <>
    <Box w={['90%', '50%']} marginX="auto" sx={{ maxWidth: '1000px' }}>
      <VStack>
        <Box marginX="auto" w={['100%', '70%']} mt={20} mb={7}>
          <Image marginX="auto" src={UC} alt="Dan Abramov" />
        </Box>
        <Box>
          <Heading
            as="h3"
            size="md"
            textAlign="center"
            color={`${pallete.fontPrimary}`}
          >
            👷‍♂️This page is under construction! We will be back soon👷‍♀️
          </Heading>
        </Box>
      </VStack>
    </Box>
  </>
);
