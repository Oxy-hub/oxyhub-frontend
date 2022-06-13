import { Container } from '@chakra-ui/react';

import AccountDetails from './AccountDetails';
import PersonalDetails from './PersonalDetails';

// Wrap this component with an error boundary

// eslint-disable-next-line import/prefer-default-export
export const Profile = () => (
  <Container maxW="950px" mt={12}>
    <AccountDetails />
    <PersonalDetails />
  </Container>
);
