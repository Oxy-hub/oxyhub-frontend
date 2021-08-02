import styled from 'styled-components';
import pallete from '../../../utils/pallete';

export const HeaderContainer = styled.div`
	text-align: center;
	margin-bottom: 2em;
`;

export const Heading = styled.h1`
	font-size: 1.8rem;
	font-weight: 600;
	color: ${pallete.fontBlack};
`;
export const SubHeading = styled.h2`
	font-size: 1rem;
	font-weight: 400;
	margin: 0 auto;
	line-height: 25px;
	color: ${pallete.fontBlack};
	opacity: 0.8;
`;
