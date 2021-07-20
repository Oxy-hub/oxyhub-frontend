import styled from 'styled-components';
// import variables from '../../../utils/variables';

export const Button = styled.button`
	outline: none;
	border: none;
	width: 100%;
	padding: 1em;
	font-size: 0.95rem;
	font-weight: 600;
	letter-spacing: 1px;
	cursor: pointer;
	color: ${props => props.color};
	border-radius: 5px;
	border: ${props => (props.background === 'transparent' ? '1px' : '0px')} solid
		#d5d5d5;
	background-color: ${props => props.background};
	margin-bottom: ${props => (!props.last ? '1.5em' : 0)};
	// display: flex;
	// justify-content: center;

	// div {
	// 	display: ;
	// }
`;

// export const IconContainer = styled.span`
// 	display: flex;
// 	align-item: center;
// 	justify-content: center;
// 	border: 1px solid black;
// 	font-family: ${variables.poppins};
// `;
