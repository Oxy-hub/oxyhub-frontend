import { nanoid } from 'nanoid';
import { useContext } from 'react';
import {
  Text,
  Modal,
  VStack,
  Button,
  ModalBody,
  RadioGroup,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  ModalContent
} from '@chakra-ui/react';

import VariantSelector from './VariantSelector';
import { CylinderContext } from '../../providers/CylinderProvider';

const BookingModal = () => {
  const { choice, closeModal, setSku } = useContext(CylinderContext);

  return (
    <Modal isOpen={choice.isModalOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent backgroundColor="neutral.100" px={0}>
        <ModalHeader>
          <Text textStyle="beta" py={3}>
            Choose a variant
          </Text>
        </ModalHeader>

        <ModalBody>
          <RadioGroup onChange={setSku} value={choice.sku}>
            <VStack spacing={4} align="stretch">
              {choice.variants &&
                choice.variants.map(variant => (
                  <VariantSelector variant={variant} key={nanoid()} />
                ))}
            </VStack>
          </RadioGroup>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" isDisabled={choice.sku === null}>
            Checkout
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookingModal;
