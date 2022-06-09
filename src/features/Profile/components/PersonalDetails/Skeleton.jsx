import { Skeleton, SkeletonText } from '@chakra-ui/react';

const PersonalDetailsSkeleton = () => (
  <>
    <Skeleton height="30px" width="30%" />
    <SkeletonText mt="4" noOfLines={4} spacing="4" />
  </>
);

export default PersonalDetailsSkeleton;
