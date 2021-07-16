import styled from 'styled-components';
import pallete from '../../utils/pallete';

export const FormContainer = styled.div`
	width: 50%;
	padding: 2.8em 1.5em;

	@media (max-width: 1100px) {
		width: 100%;
	}
`;

export const Form = styled.form`
	padding: 0 2em;

	div {
		.error {
			color: ${pallete.primary};
			font-size: 13px;
		}
	}
`;

export const InputContainer = styled.div`
	display: flex;
	border-radius: 5px;
	border: 1px solid ${props => (!props.active ? '#d3d3d3' : pallete.primary)};
	transition: border 100ms ease-in-out;

	span {
		font-size: 16px;
		color: ${pallete.fontPrimary};
		padding: 0.95em 0.6em 0.95em 1em;
	}

	input {
		flex-grow: 1;
		font-size: 16px;
		color: ${pallete.fontPrimary};
		font-family: inherit;
		outline: none;
		border: none;
		background: transparent;
		padding: 0.95em 0;
		::placeholder {
			opacity: 0.5;
		}
	}
`;

export const SubmitButton = styled.button`
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
	background-color: ${pallete.primary};
	box-shadow: 0px 12px 24px -12px rgba(255, 114, 94, 0.5);
	-webkit-box-shadow: 0px 12px 24px -12px rgba(255, 114, 94, 0.5);
`;
