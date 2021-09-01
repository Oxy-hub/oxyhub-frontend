import { SocialAuthContainer, ButtonContainer } from './socialauth.styled';
import LoginHeader from './LoginHeader';
import SocialAuthButton from './SocialAuthButton';
import authProviders from '../../../utils/authProviders';

const LoginForm = () => (
  <SocialAuthContainer>
    <LoginHeader />
    <ButtonContainer>
      {authProviders.map((provider, index) => (
        <SocialAuthButton
          key={provider.provider}
          last={authProviders.length - 1 === index}
          {...provider}
        >
          {provider.text}
        </SocialAuthButton>
      ))}
    </ButtonContainer>
  </SocialAuthContainer>
);

export default LoginForm;
