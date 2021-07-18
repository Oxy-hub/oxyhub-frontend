import styled from 'styled-components';
import pallete from '../../utils/pallete';
export const Button = styled.button`
	outline: none;
	border: none;
	width: 100%;
	padding: 1em;
	font-size: 0.95rem;
	font-weight: 600;
	letter-spacing: 1px;
	cursor: pointer;
	color: white;
	border-radius: 5px;
	background-color: ${props =>
		!props.isLoading ? pallete.primary : '#000000'};
	box-shadow: 0px 12px 24px -12px rgba(255, 114, 94, 0.5);
	-webkit-box-shadow: 0px 12px 24px -12px rgba(255, 114, 94, 0.5);
`;