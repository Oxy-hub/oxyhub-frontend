import { FeatureSection, FeatureContainer } from './index.styled';
import Result from './Result';
import SearchUI from './Search';

const Search = () => (
  <FeatureSection>
    <SearchUI />
    <FeatureContainer>
      <Result />
    </FeatureContainer>
  </FeatureSection>
);

export default Search;
