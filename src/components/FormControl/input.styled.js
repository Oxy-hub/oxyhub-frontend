import styled from 'styled-components';
import pallete from '../../utils/pallete';

// eslint-disable-next-line
export const InputText = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  outline: none;
  width: 100%;
  margin-top: 8px;
  padding: 0.95em 1em;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: ${pallete.fontPrimary};
  background: transparent;
  transition: border 100ms ease-in-out;

  background: ${props => props.disabled && pallete.footerBg};

  :focus {
    border: 1px solid ${pallete.primary};
  }
`;
