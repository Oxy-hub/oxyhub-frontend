import styled from 'styled-components';
import pallete from '../../../utils/pallete';

export const FooterContainer = styled.footer`
	width: 100%;

	background: ${pallete.footerBg};
`;

export const FooterWrapper = styled.div`
	margin: 0 auto;
	max-width: 1100px;
	padding: 2em 1em;
`;

export const BuiltWithText = styled.p`
	font-size: 1.05rem;
	color: ${pallete.fontPrimary};
	text-align: center;
	word-break: break-all;
	display: flex;
	justify-content: center;

	span {
		display: inline-flex;
		align-items: center;
		margin: 0 6px;
		color: ${pallete.primary};
	}

	.bold {
		font-weight: 600;
	}
`;
