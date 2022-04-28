import { useDispatch } from 'react-redux';
import { Box, VStack, Image, Heading, Button } from '@chakra-ui/react';
import { setLoader } from '../../../store/actions';
import useLogout from '../../../hooks/useLogout';
import pallete from '../../../utils/pallete';
import UC from '../../../assets/uc.svg';

const UnderContstruction = () => {
  const dispatch = useDispatch();
  const { mutate } = useLogout(dispatch);
  return (
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
              Our website is under construction. But we will be back soon ...
              Stay tuned !
            </Heading>
          </Box>
          <Box>
            <Button
              mt={7}
              variant="outline"
              onClick={() => {
                dispatch(setLoader());
                mutate();
              }}
            >
              Logout
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default UnderContstruction;
