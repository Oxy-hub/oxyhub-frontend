// import { useState } from 'react';
import {
  SearchBG,
  SearchFeatureContainer,
  Header,
  DropdownContainer
} from './search.styled';
// import Dropdown from '../../../components';

const Search = () => {
  console.log('Search mout');

  // const [state, setState] = useState(null);
  // const [district, setDistrict] = useState(null);
  // const [type, setType] = useState(null);

  return (
    <SearchBG>
      <SearchFeatureContainer>
        <Header>Oxygen cylinders, now at your fingertips!</Header>
        <DropdownContainer>
          <div style={{ width: '25%', height: '100%', background: 'white' }}>
            Some Dropdown
          </div>
          <div style={{ width: '25%', height: '100%', background: 'white' }}>
            Some Dropdown
          </div>
          <div style={{ width: '25%', height: '100%', background: 'white' }}>
            Some Dropdown
          </div>
          <div style={{ width: '25%', height: '100%', background: 'white' }}>
            Some Dropdown
          </div>
        </DropdownContainer>
      </SearchFeatureContainer>
    </SearchBG>
  );
};

export default Search;
