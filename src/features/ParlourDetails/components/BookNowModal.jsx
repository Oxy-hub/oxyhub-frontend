/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Stack,
  Box,
  Radio,
  RadioGroup
} from '@chakra-ui/react';

const BookNowModal = ({ isOpen, onClose }) => (
  // eslint-disable-next-line react/jsx-boolean-value
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent backgroundColor="neutral.100">
      <ModalHeader>
        <Text textStyle="beta" py={3}>
          Choose the variant
        </Text>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <RadioGroup>
          <Stack spacing={3} mb={4}>
            <Box
              boxShadow="lg"
              px={3}
              py={3}
              borderRadius="lg"
              backgroundColor="neutral.0"
            >
              <Radio value="A" size="sm" mb={1}>
                <Text textStyle="epsilon">Variant A</Text>
              </Radio>
              <Text textStyle="pi">
                Height : 150cm, Water capacity: 20L, Oxygen capacity: 20L
              </Text>
            </Box>

            <Box
              boxShadow="lg"
              px={3}
              py={3}
              borderRadius="lg"
              backgroundColor="neutral.0"
            >
              <Radio value="B" size="sm" mb={1}>
                <Text textStyle="epsilon">Variant A</Text>
              </Radio>
              <Text textStyle="pi">
                Height : 150cm, Water capacity: 20L, Oxygen capacity: 20L
              </Text>
            </Box>

            <Box
              boxShadow="lg"
              px={3}
              py={3}
              borderRadius="lg"
              backgroundColor="neutral.0"
            >
              <Radio value="C" size="sm" mb={1}>
                <Text textStyle="epsilon">Variant A</Text>
              </Radio>
              <Text textStyle="pi">
                Height : 150cm, Water capacity: 20L, Oxygen capacity: 20L
              </Text>
            </Box>
          </Stack>
        </RadioGroup>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3}>
          Close
        </Button>
        {/* <Button variant="ghost">Secondary Action</Button> */}
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default BookNowModal;
