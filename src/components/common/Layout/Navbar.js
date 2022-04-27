import { Box, HStack, Link, Spacer, Button } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useLogout from '../../../hooks/useLogout';
import { setLoader } from '../../../store/actions';

const Navbar = () => {
  const dispatch = useDispatch();
  const { mutate } = useLogout(dispatch);

  return (
    <Box
      w="85%"
      m="0 auto"
      sx={{ maxWidth: '1200px', border: '1px solid black' }}
    >
      <Box bg="white">
        <HStack>
          <Link as={ReactLink} to="/search">
            Search
          </Link>
          <Link as={ReactLink} to="/myprofile">
            My Profile
          </Link>
          <Spacer />
          <Button
            onClick={() => {
              dispatch(setLoader());
              mutate();
            }}
          >
            Logout
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
