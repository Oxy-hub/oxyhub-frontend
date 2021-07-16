import {
	FormWrapper,
	Heading,
	LoginWrapper,
	BackgroundContainer,
	Disclaimer,
} from './login.styled';
import LoginForm from './LoginForm';
import Graphic from './Graphic';

const Login = () => {
	return (
		<BackgroundContainer>
			<LoginWrapper>
				<Heading>
					<h1 style={{textAlign: 'center'}}>Oxyhub</h1>
				</Heading>
				<FormWrapper>
					<LoginForm />
					<Graphic />
				</FormWrapper>
				<Disclaimer>
					Disclaimer : This application is not meant to be used as a real life
					application.
				</Disclaimer>
			</LoginWrapper>
		</BackgroundContainer>
	);
};

export default Login;
