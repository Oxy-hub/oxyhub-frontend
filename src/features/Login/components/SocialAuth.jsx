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
  // OnSuccess: DIspatch the loader,Call thee backend API with the exchange token. On SUccessfull API response, remove the loader, set the user token appropritaely. If API response fails, display toaast
  const onSuccess = (eToken, provider) => {
    dispatch(setLoader());
    mutate({ eToken, provider });
  };

  // OnError : Display toast message

  // OnStateCheckFail : Display Toast Message

  const { openOAuthPopup } = useOAuthPopup({ onSuccess });
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
