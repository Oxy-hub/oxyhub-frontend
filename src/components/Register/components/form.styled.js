import styled from 'styled-components';
import {Field as FormikField} from 'formik';
import pallete from '../../../utils/pallete';

export const InputFieldContainer = styled.div`
	width: 100%;
	margin-bottom: 1.2em;
`;

export const Label = styled.label`
	display: block;
	font-size: 1rem;
	font-weight: 500;
	color: ${pallete.fontBlack};
`;

export const ButtonContainer = styled.div`
	margin-top: 2em;
`;

export const Field = styled(FormikField)`
	outline: none;
	width: 100%;
	margin-top: 8px;
	padding: 0.95em 1em;
	font-family: inherit;
	font-size: 16px;
	border: 1px solid #d3d3d3;
	border-radius: 5px;
	color: ${pallete.fontPrimary};
	background: transparent;
	transition: border 100ms ease-in-out;

	background: ${props => props.disabled && pallete.footerBg};

	:focus {
		border: 1px solid ${pallete.primary};
	}
`;
