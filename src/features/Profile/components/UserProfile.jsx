import { Box, Avatar, Center, Heading, Flex, Text } from '@chakra-ui/react';
import pallete from '../../../utils/pallete';
import docBG from '../../../assets/docBg.png';
import dummyAvatar from '../../../assets/dummyAvatar.jpg';

const UserProfile = () => {
  console.log('');
  return (
    <>
      <Box
        bg={`${pallete.primary}`}
        w="100%"
        h="150px"
        backgroundImage={`url(${docBG})`}
        backgroundPosition="center"
        backgroundSize="25%"
        sx={{ backgroundBlendMode: 'multiply' }}
      >
        {}
      </Box>

      <Center>
        <Box
          bg="white"
          w="50%"
          boxShadow="xl"
          mt="10"
          borderRadius="20"
          sx={{ maxWidth: '1000px', minWidth: '768px' }}
        >
          {/* Account details Header Section  */}
          <Box
            width="100%"
            h="96px"
            borderTopRadius="20"
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
                <Heading as="h3" size="lg" ml="7" color="white">
                  Hi, Ishika
                </Heading>
              </Flex>
            </Center>
          </Box>

          {/* Account Details */}
          <Box p="20" py="10">
            <Heading as="h4" size="md" mb="5" color={`${pallete.fontBlack}`}>
              Account Details
            </Heading>

            <Flex width="100%" align="center" mb="5">
              <Text fontSize="md" width="30%">
                Email
              </Text>
              <Text fontSize="lg">testuser@email.com</Text>
            </Flex>

            <Flex width="100%" align="center">
              <Text fontSize="md" width="30%">
                Last seen on
              </Text>
              <Text fontSize="lg">5th January,2022</Text>
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default UserProfile;
// border="1px" borderColor="black"
