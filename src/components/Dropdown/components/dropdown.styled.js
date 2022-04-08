import styled from 'styled-components';

export const DropdownInput = styled.div`
  // border: 2px solid black;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 20px;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const DropdownWrapper = styled.div`
  // border-left: 1px solid blue;
  position: relative;
`;
export const DropdownButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: 0.7;
`;
export const DisplayName = styled.span`
  color: ${({ theme }) => theme.fontPrimary};
  opacity: ${props => (props.selectedItem ? '1' : '0.4')};
`;
