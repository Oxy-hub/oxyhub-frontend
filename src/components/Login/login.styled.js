import styled from 'styled-components';
import pallete from '../../utils/pallete';

export const BackgroundContainer = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #f7fbfe;
`;

export const LoginWrapper = styled.div`
	width: 1000px;
	margin: 0 auto;

	@media (max-width: 1100px) {
		width: 450px;
	}
	@media (max-width: 450px) {
		width: 90%;
	}
`;

export const Heading = styled.div`
	width: 100%;
`;

export const SocialAuthWrapper = styled.div`
	width: 100%;
	display: flex;
	-webkit-box-shadow: 0px 60px 200px rgb(0 0 0 / 15%);
	-moz-box-shadow: 0px 60px 200px rgb(0 0 0 / 15%);
	box-shadow: 0px 60px 200px rgb(0 0 0 / 15%);
`;

export const Disclaimer = styled.p`
	font-size: 0.85rem;
	font-weight: 200;
	color: ${pallete.fontPrimary};
	text-align: center;
	margin-top: 2.4em;
	word-break: break-all;
`;
