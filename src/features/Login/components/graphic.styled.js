import styled from 'styled-components';
import pallete from '../../../utils/pallete';

export default styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${pallete.bgGraphic};

  @media (max-width: 1100px) {
    display: none;
  }
`;
