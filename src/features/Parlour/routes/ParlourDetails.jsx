import { Divider, Container } from '@chakra-ui/react';

import CylinderProvider from '../providers/CylinderProvider';

import Action from '../components/Action';
import Details from '../components/Details';

// eslint-disable-next-line import/prefer-default-export
export const ParlourDetails = () => (
  <CylinderProvider>
    <Container maxW="container.lg" mt={20}>
      <Details />
      <Divider />
      <Action />
    </Container>
  </CylinderProvider>
);