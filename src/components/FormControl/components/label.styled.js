import styled from 'styled-components';
import pallete from '../../../utils/pallete';

// eslint-disable-next-line
export const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: ${pallete.fontBlack};

  span {
    color: ${pallete.primary};
  }
`;
