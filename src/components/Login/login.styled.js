import styled from 'styled-components';
import pallete from '../../utils/pallete';

export const BackgroundContainer = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	// border: 1px solid ${pallete.primary};
`;

export const LoginWrapper = styled.div`
	width: 1000px;
	margin: 0 auto;
	// border: 1px solid ${pallete.primary};

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

export const FormWrapper = styled.div`
	width: 100%;
	display: flex;
	// border: 1px solid ${pallete.primary};
`;

export const Disclaimer = styled.p`
	font-size: 0.75rem;
	font-weight: 200;
	color: ${pallete.fontPrimary};
	text-align: center;
	margin-top: 1.8em;
	word-break: break-all;
`;
// export const Container = styled.div`
// 	margin: 0 auto;
// 	width: 50%;
// `;
