import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  Box,
  // TableCaption
  Button,
  // StylesProvider,
  useMultiStyleConfig
  // useStyles
} from '@chakra-ui/react';
// import { ResultFeatureContainer } from './result.styled';
import parlors from './dummyData';

const Data = props => {
  const styles = useMultiStyleConfig('Td', {});
  return <Td sx={styles.td} {...props} />;
};

const Result = () => (
  <Box mt="5rem" bg="white" borderRadius="10px" p="6" boxShadow="md">
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>State</Th>
          <Th>District</Th>
          <Th>Location</Th>
          <Th>Available</Th>
          <Th>Know More</Th>
        </Tr>
      </Thead>
      <Tbody>
        {parlors.p1.map(parlor => (
          <Tr key={parlor.id} sx={{ paddingTop: '0px' }}>
            <Data>{parlor.name}</Data>
            <Data>{parlor.state}</Data>
            <Data>{parlor.district}</Data>
            <Data>{parlor.location}</Data>
            <Data>{parlor.available}</Data>
            <Data>
              <Button colorScheme="#ff725e" variant="outline">
                Click here!
              </Button>
            </Data>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
);

export default Result;
