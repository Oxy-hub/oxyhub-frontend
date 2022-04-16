import { Box, Avatar, Center, Heading, Flex, Text } from '@chakra-ui/react';
import pallete from '../../../utils/pallete';
// import docBG from '../../../assets/docBg.png';
import dummyAvatar from '../../../assets/dummyAvatar.jpg';

const UserProfile = () => {
  console.log('');
  const name = ['First Name', 'Middle Name', 'Last Name'];
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
                Hi, Ishika
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
            <Text fontSize="lg">testuser@email.com</Text>
          </Flex>

          <Flex width="100%" align="center">
            <Text fontSize="md" width="30%">
              Last login
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
        {name.map(n => (
          <Flex width="100%" align="center" mb={3}>
            <Text fontSize="md" width="30%">
              {n}
            </Text>
            <Text fontSize="lg">Ishika Mukherjee</Text>
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default UserProfile;
