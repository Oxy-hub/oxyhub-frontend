import styled from 'styled-components';

export default styled.button`
  outline: none;
  border: none;
  width: 100%;
  padding: 0.9em;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 12px 24px -12px rgba(255, 114, 94, 0.5);
  transition: opacity 150ms ease-in-out;
  ${props => props.disabled && `opacity: 85%;`}
`;
