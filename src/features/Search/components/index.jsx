import { Box, Container } from '@chakra-ui/react';

// import { FeatureSection, FeatureContainer } from './index.styled';
import Hero from './Hero';
import SearchForm from './SearchForm';
import ResultTable from './ResultTable';

// eslint-disable-next-line import/prefer-default-export
export const Search = () => (
  <>
    {/* Hero Section */}
    <Box
      bgColor="primary.700"
      bgGradient="background-color: #ff725e; background-image: linear-gradient(90deg, #ff725e 37%, #ff9a8c 100%);"
    >
      <Hero />
    </Box>

    <Container maxW="container.lg">
      <SearchForm />
    </Container>

    {/* Result Section */}
    <ResultTable />
  </>
);
