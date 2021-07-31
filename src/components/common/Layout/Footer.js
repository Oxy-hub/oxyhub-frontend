import {FooterContainer, FooterWrapper, BuiltWithText} from './footer.styled';
import {FaHeart} from 'react-icons/fa';
const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<BuiltWithText>
					Made with
					<span>
						<FaHeart />
					</span>
					and
					<span className='bold'>React</span>
				</BuiltWithText>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
