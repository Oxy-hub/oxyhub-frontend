import {useState} from 'react';
import {SocialAuthContainer} from './socialauth.styled';
import LoginHeader from './LoginHeader';

const LoginForm = () => {
	return (
		<SocialAuthContainer>
			<LoginHeader />
			<button>Login with Github</button>
		</SocialAuthContainer>
	);
};

export default LoginForm;
