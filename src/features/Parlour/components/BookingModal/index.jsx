import { nanoid } from 'nanoid';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
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
import { useGetItems } from '../../api/getItems';
import { useGetRazorpayOrderId } from '../../../Order';
import { useGetParlourDetails } from '../../api/getParlour';
import { CylinderContext } from '../../providers/CylinderProvider';

const BookingModal = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const { choice, closeModal, setSku } = useContext(CylinderContext);

  const { data } = useGetParlourDetails(id);
  const { mutate } = useGetRazorpayOrderId();
  const { data: itemData } = useGetItems(id);

  useEffect(() => {
    setItem(
      itemData.data.items.filter(
        product => product.product_id === choice.productId
      )
    );
    if (choice.sku) setSku(null);
  }, [choice.productId, itemData]);

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
              {item.length > 0 &&
                item[0].variants.map(variant => (
                  <VariantSelector variant={variant} key={nanoid()} />
                ))}
            </VStack>
          </RadioGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            isDisabled={choice.sku === null}
            onClick={() => {
              mutate({
                sku: choice.sku,
                purchase_type: 1,
                store_id: data.data.store_id,
                product_id: choice.productId
              });
              closeModal();
            }}
          >
            Checkout
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BookingModal;
