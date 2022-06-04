import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { RiErrorWarningLine } from 'react-icons/ri';
import {
  Text,
  Modal,
  Button,
  VStack,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/react';

import useLogout from '../../../hooks/useLogout';
import { setLoader } from '../../../store/actions';

const LogoutModal = props => {
  const { isOpen, onClose } = props;
  const dispatch = useDispatch();
  const { mutate } = useLogout(dispatch);

  const logout = () => {
    onClose();
    dispatch(setLoader());
    mutate();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* Modal Body Content */}
          <ModalBody pb={8} pt={6}>
            <VStack spacing={2.5}>
              <RiErrorWarningLine size="2em" />
              <Text textStyle="omega">Are you sure you want to logout?</Text>
            </VStack>
          </ModalBody>

          {/* Modal Footer Content */}
          <ModalFooter>
            {/* Buttons should be updated after variant is set */}
            <Button onClick={onClose}>Close</Button>
            <Button onClick={logout}>Logout</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LogoutModal;

LogoutModal.propTypes = {
  isOpen: PropType.bool.isRequired,
  onClose: PropType.func.isRequired
};
