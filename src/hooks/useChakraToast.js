import { useMemo } from 'react';
import { useToast } from '@chakra-ui/react';

const useChakraToast = () => {
  const chakraToast = useToast();

  const toastOptions = useMemo(
    () => ({
      warning: 'warning',
      success: 'success',
      error: 'error',
      info: 'info'
    }),
    []
  );

  const toast = options => {
    console.log('Should Toast');
    chakraToast({
      ...options,
      duration: 5000,
      isClosable: true,
      position: 'bottom-left'
    });
  };

  return { toast, toastOptions };
};

export default useChakraToast;
