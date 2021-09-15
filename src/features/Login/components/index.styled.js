import styled from 'styled-components';
import pallete from '../../../utils/pallete';

export const BackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f7fbfe;
`;

export const LoginWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    width: 450px;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const Heading = styled.div`
  width: 100%;
  margin-bottom: 2em;
`;

export const SocialAuthWrapper = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-shadow: 5px 45px 150px rgb(0 0 0 / 16%);
  -moz-box-shadow: 5px 45px 150px rgb(0 0 0 / 16%);
  box-shadow: 5px 45px 150px rgb(0 0 0 / 16%);
`;

export const BuiltWithText = styled.p`
  font-size: 1.05rem;
  color: ${pallete.fontPrimary};
  text-align: center;
  margin-top: 1.8em;
  word-break: break-all;
  display: flex;
  justify-content: center;

  span {
    display: inline-flex;
    align-items: center;
    margin: 0 6px;
    color: ${pallete.primary};
  }
`;
