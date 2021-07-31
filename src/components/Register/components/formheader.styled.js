import styled from 'styled-components';
import pallete from '../../../utils/pallete';

export const HeaderContainer = styled.div`
	// border: 1px solid black;
`;

export const Heading = styled.h1`
	font-size: 2rem;
	font-weight: 600;
	margin-bottom: 0.15em;
	color: ${pallete.fontBlack};
`;
export const SubHeading = styled.h2`
	font-size: 1.1rem;
	font-weight: 400;
	margin: 0 auto;
	line-height: 25px;
	color: ${pallete.fontBlack};
	opacity: 0.8;
`;
