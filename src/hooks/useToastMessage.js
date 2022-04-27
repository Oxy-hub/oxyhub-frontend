import { useToast } from '@chakra-ui/react';

const useToastMessage = () => {
  const toast = useToast();

  const onSuccessToast = message => {
    toast({
      title: 'Success',
      description: message,
      status: 'success',
      duration: 3000,
      position: 'top',
      isClosable: true
    });
  };

  const onErrorToast = message => {
    toast({
      title: 'Error',
      description: message,
      status: 'error',
      duration: 3000,
      position: 'top',
      isClosable: true
    });
  };

  const onWarningToast = message => {
    toast({
      title: 'Warning',
      description: message,
      status: 'warning',
      duration: 3000,
      position: 'top',
      isClosable: true
    });
  };

  return { onSuccessToast, onErrorToast, onWarningToast };
};

export default useToastMessage;
