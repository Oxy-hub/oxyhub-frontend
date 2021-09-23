import styled from 'styled-components';
import pallete from '../../../utils/pallete';

export const List = styled.ul`
  position: absolute;
  top: 69px;
  width: 100%;
  max-height: 260px;
  padding: 0.5em 0.7em;
  background: white;
  border-radius: 10px;
  box-shadow: 2px 8px 16px rgb(3 17 38 / 11%), 0 0 1px rgb(0 12 32 / 2%);
  z-index: 10;

  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    background-color: red;
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }
`;

export const MenuItem = styled.button`
  width: 100%;
  padding: 0.5em 0.4em;
  border: none;
  color: ${pallete.fontPrimary};
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  transition: all 150ms ease-in-out;

  :hover {
    background: ${pallete.primaryFaded};
    color: ${pallete.primary};
  }
`;
