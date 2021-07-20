import {
	SocialAuthWrapper,
	Heading,
	LoginWrapper,
	BackgroundContainer,
	Disclaimer,
} from './login.styled';
import SocialAuth from './components/SocialAuth';
import Graphic from './components/Graphic';

const Login = () => {
	return (
		<BackgroundContainer>
			<LoginWrapper>
				<Heading>
					<h1 style={{textAlign: 'center'}}>Oxyhub</h1>
				</Heading>
				<SocialAuthWrapper>
					<SocialAuth />
					<Graphic />
				</SocialAuthWrapper>
				<Disclaimer>
					Disclaimer : This application is not meant to be used as a real life
					application.
				</Disclaimer>
			</LoginWrapper>
		</BackgroundContainer>
	);
};

export default Login;
