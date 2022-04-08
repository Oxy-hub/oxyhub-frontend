import styled from 'styled-components';
// eslint-disable-next-line
export const Form = styled.form`
  position: absolute;
  top: 82%;
  left: 0;
  right: 0;
  max-width: 950px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 8px 33px rgb(0 0 0 / 6%);
`;

export const SearchButton = styled.button`
  outline: none;
  border: none;
  width: 15%;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  color: white;
  border-radius: 20px;
  background-color: ${props => (props.disabled ? '#c2bfbf' : '#36bc97')};
`;
