/* eslint-disable react/jsx-props-no-spreading */
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import { useSelector } from 'react-redux';
import { Link as ReactLink } from 'react-router-dom';
// import { ErrorBoundary } from 'react-error-boundary';
import { withErrorBoundary } from 'react-error-boundary';
import {
  Tr,
  Th,
  Td,
  Table,
  Thead,
  Tbody,
  Button,
  Container,
  TableContainer,
  Link
} from '@chakra-ui/react';

import SearchPrompt from './prompts/Search';
import NoParloursPrompt from './prompts/NoParlours';
import { useGetParlours } from '../api/getParlours';
import { Prompt, LoadingSkeleton } from '../../../components/Elements';

const ResultTable = () => {
  const user = useSelector(state => state.user);

  const { data, isFetching } = useGetParlours(
    user.statePreference ? user.statePreference.code : null,
    user.districtPreference ? user.districtPreference.name : null,
    { useErrorBoundary: true }
  );

  const columns = useMemo(
    () => [
      {
        id: nanoid(),
        Header: 'Parlour Name',
        accessor: row => row.name,
        maxWidth: 12
      },
      {
        id: nanoid(),
        Header: 'Location',
        accessor: row => row.location.address
      },
      {
        id: nanoid(),
        Header: 'Pincode',
        accessor: row => row.location.pincode
      },
      {
        id: nanoid(),
        Header: 'Owner',
        Cell: () => <h1>Sabyasachi Karmakar</h1>
      },
      {
        Header: 'Actions',
        accessor: row => row.store_id,
        // eslint-disable-next-line react/prop-types
        Cell: ({ value }) => (
          <Link as={ReactLink} to={`/parlours/${value}`}>
            <Button>View More</Button>
          </Link>
        )
      }
    ],
    []
  );

  const table = useTable({
    columns,
    data: data
      ? data.data.parlours
      : new Array(14).fill(
          {
            name: null,
            store_id: null,
            location: {
              address: null,
              pincode: null
            }
          },
          0,
          14
        )
  });

  if (!data && !isFetching)
    return (
      <Container maxW="container.lg">
        <SearchPrompt />
      </Container>
    );

  if (data && data.data.total === 0) {
    return (
      <Container maxW="container.lg">
        <NoParloursPrompt />
      </Container>
    );
  }

  return (
    <Container
      mt={8}
      mb={16}
      px={8}
      py={5}
      maxW="1140px"
      boxShadow="lg"
      borderRadius="lg"
      bgColor="neutral.0"
    >
      <TableContainer maxWidth="100%" whiteSpace="wrap">
        <Table {...table.getTableProps()} variant="striped">
          <Thead>
            <Tr>
              {table.columns.map(column => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody {...table.getTableBodyProps()}>
            {table.rows.map(row => {
              table.prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <Td {...cell.getCellProps()}>
                      {isFetching ? <LoadingSkeleton /> : cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default withErrorBoundary(ResultTable, {
  FallbackComponent: Prompt
});
