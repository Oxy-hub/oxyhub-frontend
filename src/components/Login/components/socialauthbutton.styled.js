import styled from 'styled-components';
// import variables from '../../../utils/variables';

export const Button = styled.button`
	outline: none;
	width: 100%;
	border-radius: 5px;
	border: ${props => (props.background === 'transparent' ? '1px' : '0px')} solid
		#d5d5d5;
	padding: 1em;
	margin-bottom: ${props => (!props.last ? '1.5em' : 0)};
	font-size: 0.95rem;
	font-weight: 600;
	text-align: center;
	letter-spacing: 1px;
	color: ${props => props.color};
	background-color: ${props => props.background};
	cursor: pointer;
	position: relative;
`;

export const IconContainer = styled.span`
	top: 0;
	left: 0;
	height: 100%;
	margin-left: 1.4em;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;

	@media (max-width: 450px) {
		margin-left: 0.9em;
	}
	@media (max-width: 340px) {
		margin-left: 0.6em;
	}
	@media (max-width: 340px) {
		display: none;
	}
`;
