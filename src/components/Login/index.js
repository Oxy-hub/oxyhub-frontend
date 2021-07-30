import {
	SocialAuthWrapper,
	Heading,
	LoginWrapper,
	BackgroundContainer,
	LoveText,
} from './login.styled';
import SocialAuth from './components/SocialAuth';
import Graphic from './components/Graphic';
import {FaHeart} from 'react-icons/fa';

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
				<LoveText>
					Made with
					<span>
						<FaHeart />
					</span>
					and React
				</LoveText>
			</LoginWrapper>
		</BackgroundContainer>
	);
};

export default Login;
