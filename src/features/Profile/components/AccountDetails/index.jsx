import dayjs from 'dayjs';
import { Box, Text, Avatar, HStack, VStack } from '@chakra-ui/react';

import { useGetProfile } from '../../api/getProfile';
import AccountDetailsSkeleton from './Skeleton';

const AccountDetails = () => {
  const { data: profileData, isLoading } = useGetProfile();

  return (
    <Box
      mb={14}
      boxShadow="lg"
      overflow="hidden"
      borderRadius="md"
      background="neutral.0"
    >
      {isLoading ? (
        <AccountDetailsSkeleton />
      ) : (
        <>
          <Box
            height="96px"
            bgGradient="background-color: #ff725e; background-image: linear-gradient(90deg, #ff725e 37%, #ff9a8c 100%);"
          />

          <Box px={12} pb={8}>
            {/* Avatar and Name Box */}
            <HStack spacing={5} sx={{ transform: 'translateY(-80%)' }}>
              <Avatar
                size="lg"
                src={profileData.data.avatar}
                borderWidth="4px"
                borderColor="secondary.700"
              />
              <Text textStyle="beta" as="h3" color="neutral.0">
                {`Hi, ${profileData.data.first_name}`}
              </Text>
            </HStack>

            {/* Account Details */}
            <Box>
              <Text textStyle="delta" mb={8}>
                Account Details
              </Text>

              <VStack spacing={6} align="flex-start">
                <HStack spacing={9}>
                  <Text textStyle="omegaSemibold" minWidth="180px">
                    Email
                  </Text>
                  <Text textStyle="omega">{profileData.data.email}</Text>
                </HStack>
                <HStack spacing={9}>
                  <Text textStyle="omegaSemibold" minWidth="180px">
                    Account Created On
                  </Text>
                  <Text textStyle="omega">
                    {dayjs(profileData.data.created_at).format('MMMM D, YYYY')}
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default AccountDetails;
