// import { useState } from 'react';
// import useGetStates from '../api/getStates';
import menu from '../utils/dropdownHelpers';
import {
  SearchBG,
  SearchFeatureContainer,
  Header,
  DropdownContainer
} from './search.styled';
import Dropdown from '../../../components/Dropdown';

const Search = () => {
  console.log('Search mout');
  // const { data: statesList } = useGetStates();

  return (
    <SearchBG>
      <SearchFeatureContainer>
        <Header>Oxygen cylinders, now at your fingertips!</Header>
        <DropdownContainer>
          {menu.map(option => (
            <Dropdown
              placeholder={option.placeholder}
              style={option.styles || { width: '25%' }}
            />
          ))}
        </DropdownContainer>
      </SearchFeatureContainer>
    </SearchBG>
  );
};

export default Search;
