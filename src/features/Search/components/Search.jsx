import SearchForm from './SearchForm';
import { SearchBG, SearchFeatureContainer, Header } from './search.styled';

const Search = () => (
  <SearchBG>
    <SearchFeatureContainer>
      <Header>Oxygen cylinders, now at your fingertips!</Header>
      <SearchForm />
    </SearchFeatureContainer>
  </SearchBG>
);

export default Search;
