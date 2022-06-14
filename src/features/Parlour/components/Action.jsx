import { useContext } from 'react';
import { useIsMutating } from 'react-query';
import { Box, Flex, Spacer, Button } from '@chakra-ui/react';

import { CylinderContext } from '../providers/CylinderProvider';

// eslint-disable-next-line react/prop-types
const Action = () => {
  const { choice, openModal } = useContext(CylinderContext);
  const isMutating = useIsMutating('getRazorpayOrderId');

  return (
    <Flex mt={10}>
      <Box>Prices will be calculated in the next step ...</Box>
      <Spacer />
      <Button
        onClick={openModal}
        isLoading={isMutating === 1}
        isDisabled={choice.type === null}
      >
        Book Now
      </Button>
    </Flex>
  );
};

export default Action;
