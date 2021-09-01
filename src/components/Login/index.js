import { FaHeart } from 'react-icons/fa';
import {
  SocialAuthWrapper,
  LoginWrapper,
  BackgroundContainer,
  BuiltWithText
} from './login.styled';
import SocialAuth from './components/SocialAuth';
import Graphic from './components/Graphic';
import Logo from './components/Logo';

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
