import {
	FormWrapper,
	Heading,
	LoginWrapper,
	BackgroundContainer,
	Disclaimer,
} from './login.styled';
import Form from './LoginForm';
import Graphic from './Graphic';

const Login = () => {
	return (
		<BackgroundContainer>
			<LoginWrapper>
				<Heading>
					<h1>Oxyhub</h1>
				</Heading>
				<FormWrapper>
					<Form />
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
