import { FeatureSection, FeatureContainer } from './index.styled';
// import Result from './Result';
import SearchUI from './Search';

const Search = () => {
  console.log('Search UI');
  return (
    // <h1>Hello</h1>
    <FeatureSection>
      <SearchUI />
      <FeatureContainer>{/* <Result /> */}</FeatureContainer>
    </FeatureSection>
  );
};

export default Search;
