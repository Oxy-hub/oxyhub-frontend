import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SocialAuthContainer, ButtonContainer } from './socialauth.styled';
import LoginHeader from './LoginHeader';
import SocialAuthButton from './SocialAuthButton';
import authProviders from '../utils/authProviders';
import useOAuthPopup from '../hooks/useOAuthPopup';
import { setLoader } from '../../../store/actions';
import useAuth from '../api/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { mutate } = useAuth(dispatch);

  const onOAuthSuccess = useCallback((token, provider) => {
    dispatch(setLoader());
    mutate({ code: token, provider });
  }, []);

  const onOAuthError = useCallback(() => {
    // Dispatch a toast message with the following message
    console.log('Login Failed. Try again!');
  }, []);

  const onOAuthStateCheckError = useCallback(() => {
    // Dispatch a toast message with the following message
    console.log('Login Failed. Contact Developers!');
  }, []);

  const { openOAuthPopup } = useOAuthPopup({
    onSuccess: onOAuthSuccess,
    onError: onOAuthError,
    onStateCheckError: onOAuthStateCheckError
  });

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
                openOAuthPopup(url, context, name);
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
