import { useTheme } from '@chakra-ui/react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// eslint-disable-next-line import/prefer-default-export
export const LoadingSkeleton = props => {
  const theme = useTheme();

  // eslint-disable-next-line react/prop-types
  const { themeProps, ...rest } = props;

  return (
    <SkeletonTheme
      baseColor={theme.colors.neutral[200]}
      highlightColor={theme.colors.neutral[100]}
      {...themeProps}
    >
      <Skeleton {...rest} containerClassName="skeleton-flex-grow-1" />
    </SkeletonTheme>
  );
};
