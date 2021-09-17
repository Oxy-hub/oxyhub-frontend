import styled from 'styled-components';
import pallete from '../../../utils/pallete';

export const RegisterFormSection = styled.section`
  width: 100%;
  padding: 2.2em 0;
`;
export const FormContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 3em 2.5em;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${pallete.border};

  @media (max-width: 470px) {
    padding: 3em 1.5em;
  }
`;
