import { Box, Text, HStack, VStack } from '@chakra-ui/react';

import PersonalDetailsSkeleton from './Skeleton';
import { useGetProfile } from '../../api/getProfile';

const PersonalDetails = () => {
  const { data: profileData, isLoading } = useGetProfile();

  return (
    <Box
      py={8}
      px={12}
      mb={10}
      boxShadow="lg"
      borderRadius="md"
      background="neutral.0"
    >
      {isLoading ? (
        <PersonalDetailsSkeleton />
      ) : (
        <>
          {/* Personal Details */}
          <Text textStyle="delta" mb={9}>
            Personal Details
          </Text>

          <VStack spacing={6} align="flex-start">
            <HStack spacing={9}>
              <Text textStyle="omegaSemibold" minWidth="180px">
                First Name
              </Text>
              <Text textStyle="omega">{profileData.data.first_name}</Text>
            </HStack>

            {profileData.data.middle_name && (
              <HStack spacing={9}>
                <Text textStyle="omegaSemibold" minWidth="180px">
                  Middle Name
                </Text>
                <Text textStyle="omega">{profileData.data.middle_name}</Text>
              </HStack>
            )}

            <HStack spacing={9}>
              <Text textStyle="omegaSemibold" minWidth="180px">
                Last Name
              </Text>
              <Text textStyle="omega">{profileData.data.last_name}</Text>
            </HStack>
          </VStack>
        </>
      )}
    </Box>
  );
};

export default PersonalDetails;
