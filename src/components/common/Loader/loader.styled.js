import styled from 'styled-components';
import pallete from '../../../utils/pallete';

export const LoaderContainer = styled.div`
	height: 100vh;
	background: ${pallete.primary};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LoaderWrapper = styled.div`
	::after {
		content: '';
		display: block;
		width: 80%;
		height: 3px;
		opacity: 0.5;
		background-color: white;
		margin: 10px auto 0 auto;
		border-radius: 10px;
	}
`;
