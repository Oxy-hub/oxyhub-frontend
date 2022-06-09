import {
  Box,
  HStack,
  Skeleton,
  SkeletonText,
  SkeletonCircle
} from '@chakra-ui/react';

const AccountDetailsSkeleton = () => (
  <Box px={12} py={8}>
    <HStack alignItems="center" spacing="50px">
      <SkeletonCircle size={20} />
      <Skeleton height="30px" width="30%" />
    </HStack>
    <SkeletonText mt="4" noOfLines={4} spacing="4" />
  </Box>
);
export default AccountDetailsSkeleton;
