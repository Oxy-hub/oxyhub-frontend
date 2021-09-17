import { FaHeart } from 'react-icons/fa';
import {
  SocialAuthWrapper,
  LoginWrapper,
  BackgroundContainer,
  BuiltWithText
} from './index.styled';
import SocialAuth from './SocialAuth';
import Graphic from './Graphic';
import Logo from './Logo';

const Login = () => (
  <BackgroundContainer>
    <LoginWrapper>
      <Logo />
      <SocialAuthWrapper>
        <SocialAuth />
        <Graphic />
      </SocialAuthWrapper>
      <BuiltWithText>
        Made with
        <span>
          <FaHeart />
        </span>
        and React
      </BuiltWithText>
    </LoginWrapper>
  </BackgroundContainer>
);

export default Login;
