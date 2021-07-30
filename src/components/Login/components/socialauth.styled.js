import styled from 'styled-components';

export const SocialAuthContainer = styled.div`
	width: 50%;
	padding: 3.3em 1.7em 2.8em 1.7em;

	@media (max-width: 1100px) {
		padding: 2.8em 1.5em;
		width: 100%;
	}
`;

export const ButtonContainer = styled.div`
	padding: 0 3em;

	@media (max-width: 1100px) {
		padding: 0;
	}
`;

// export const Form = styled(FormikForm)`
// 	padding: 0 2em;

// 	div {
// 		.error {
// 			color: ${pallete.primary};
// 			font-size: 13px;
// 			position: absolute;
// 			bottom: -1.8em;
// 			left: 0.3em;
// 		}
// 	}
// `;

// export const InputWrapper = styled.div`
// 	margin-bottom: 1.7em;
// 	position: relative;
// `;

// export const InputContainer = styled.div`
// 	display: flex;
// 	border-radius: 5px;
// 	border: 1px solid ${props => (!props.active ? '#d3d3d3' : pallete.primary)};
// 	transition: border 100ms ease-in-out;

// 	span {
// 		font-size: 16px;
// 		color: ${pallete.fontPrimary};
// 		padding: 0.95em 0.6em 0.95em 1em;
// 	}

// 	input {
// 		flex-grow: 1;
// 		font-size: 16px;
// 		color: ${pallete.fontPrimary};
// 		font-family: inherit;
// 		outline: none;
// 		border: none;
// 		background: transparent;
// 		padding: 0.95em 0;
// 		::placeholder {
// 			text-overflow: ellipsis;
// 			opacity: 0.5;
// 		}
// 	}
// `;
