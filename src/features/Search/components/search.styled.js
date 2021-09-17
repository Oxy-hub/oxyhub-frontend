import styled from 'styled-components';
import pallete from '../../../utils/pallete';
import { FeatureContainer } from './index.styled';

export const SearchBG = styled.div`
  background: ${pallete.primary};
  height: 150px;
  // border: 5px solid red;
`;

export const SearchFeatureContainer = styled(FeatureContainer)`
  height: 100%;
  padding: 2em 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid black;
`;

export const Header = styled.h1`
  color: white;
  font-size: 1.8rem;
  text-align: center;
`;

export const DropdownContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  position: absolute;
  height: 60px;
  left: 0;
  right: 0;
  top: 82%;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  border-radius: 10px;
`;
