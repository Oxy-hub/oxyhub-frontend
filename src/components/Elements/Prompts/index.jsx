import { Container } from '@chakra-ui/react';

import Generic from './Generic';

// eslint-disable-next-line import/prefer-default-export
export const Prompt = props => {
  // eslint-disable-next-line react/prop-types
  const { type, ...rest } = props;

  const resolvePromptType = () => {
    switch (type) {
      default:
        return <Generic />;
    }
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container maxW="container.lg" {...rest} centerContent>
      {resolvePromptType()}
    </Container>
  );
};
