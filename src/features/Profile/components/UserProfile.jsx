import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Box, Avatar, Center, Heading, Flex, Text } from '@chakra-ui/react';
import pallete from '../../../utils/pallete';
// import docBG from '../../../assets/docBg.png';
import dummyAvatar from '../../../assets/dummyAvatar.jpg';

const UserProfile = ({ response }) => {
  const name = {
    'First Name': response.first_name,
    'Middle Name': response.middle_name,
    Last_Name: response.last_name
  };

  const createdOn = dayjs(response.created_at);
  console.log('Date : ', createdOn);

  return (
    <>
      {/* <Box
        bg={`${pallete.primary}`}
        w="100%"
        h="150px"
        backgroundImage={`url(${docBG})`}
        backgroundPosition="center"
        backgroundSize="25%"
        sx={{ backgroundBlendMode: 'multiply' }}
      >
        {}
      </Box> */}

      {/* This box only contains account details of the concerned user */}
      <Box
        bg="white"
        w="50%"
        boxShadow="xl"
        // mt={10}
        mb={12}
        marginX="auto"
        borderRadius="xl"
        sx={{ maxWidth: '1000px', minWidth: '768px' }}
      >
        {/* Account details Header Section  */}
        <Box
          width="100%"
          h="96px"
          borderTopRadius="xl"
          bgGradient={`linear(to-r, ${pallete.primary}, ${pallete.secondary})`}
          position="relative"
        >
          <Center position="absolute" left="11%" top="25%">
            <Flex width="100%" align="center" justify="center">
              <Avatar
                size="xl"
                name="Dummy User"
                src={`${dummyAvatar}`}
                sx={{ border: '3px solid #00BB8C' }}
              />
              <Heading as="h3" size="lg" ml={7} color="white">
                {`Hi, ${response.first_name}`}
              </Heading>
            </Flex>
          </Center>
        </Box>

        {/* Account Details */}
        <Box p="20" py="10">
          <Heading as="h4" size="md" mb={5} color={`${pallete.fontBlack}`}>
            Account Details
          </Heading>

          <Flex width="100%" align="center" mb={4}>
            <Text fontSize="md" width="30%">
              Email
            </Text>
            <Text fontSize="lg">{`${response.email}`}</Text>
          </Flex>

          <Flex width="100%" align="center">
            <Text fontSize="md" width="30%">
              Created on
            </Text>
            <Text fontSize="lg">5th January,2022</Text>
          </Flex>
        </Box>
      </Box>

      {/* This box contains other personal details of the user */}
      <Box
        bg="white"
        w="50%"
        boxShadow="xl"
        mb={16}
        marginX="auto"
        borderRadius="xl"
        sx={{ maxWidth: '1000px', minWidth: '768px' }}
        p="20"
        py="10"
      >
        <Heading as="h4" size="md" mb={5} color={`${pallete.fontBlack}`}>
          Personal Details
        </Heading>
        {Object.keys(name).map(n => (
          <Flex width="100%" align="center" mb={3}>
            <Text fontSize="md" width="30%">
              {n}
            </Text>
            <Text fontSize="lg"> {`${name[n]}`} </Text>
          </Flex>
        ))}
      </Box>
    </>
  );
};
export default UserProfile;

UserProfile.propTypes = {
  response: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    middle_name: PropTypes.string,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatar: PropTypes.string,
    created_at: PropTypes.string,
    last_login: PropTypes.string
  }).isRequired
};
