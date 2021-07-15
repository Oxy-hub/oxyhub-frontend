import styled from 'styled-components';
import pallete from '../../utils/pallete';

export const FormWrapper = styled.div`
	width: 100%;
	display: flex;
	border: 1px solid ${pallete.primary};
`;

export const Heading = styled.h1`
	font-size: 1.3em;
`;

// export const Container = styled.div`
// 	margin: 0 auto;
// 	width: 50%;
// `;

export const Form = styled.form`
	width: 50%;
`;
