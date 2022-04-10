import { SocialAuthContainer, ButtonContainer } from './socialauth.styled';
import LoginHeader from './LoginHeader';
import SocialAuthButton from './SocialAuthButton';
import authProviders from '../utils/authProviders';
import useOAuthPopup from '../hooks/useOAuthPopup';

const LoginForm = () => {
  const { openOAuthPopup } = useOAuthPopup();

  return (
    <SocialAuthContainer>
      <LoginHeader />
      <ButtonContainer>
        {authProviders.map((provider, index) => {
          const { name, text, icon, background, color, helper } = provider;
          return (
            <SocialAuthButton
              key={name}
              text={text}
              icon={icon}
              background={background}
              color={color}
              onClick={() => {
                const { url, context } = helper();
                openOAuthPopup(url, context);
              }}
              isLast={authProviders.length - 1 === index}
            />
          );
        })}
      </ButtonContainer>
    </SocialAuthContainer>
  );
};

export default LoginForm;
