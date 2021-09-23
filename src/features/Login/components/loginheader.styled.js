import styled from 'styled-components';

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 2.55em;
`;
export const Heading = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.fontBlack};
`;

export const Subheading = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.fontPrimary};
`;
