import styled from 'styled-components';
import pallete from '../../utils/pallete';

export const RegisterContainer = styled.div`
	// height: 100vh;
	width: 100%;
	display: flex;
`;
export const GraphicSection = styled.section`
	width: 550px;
	display: flex;
	align-items: center;
	background-color: ${pallete.bgGraphic};

	@media (max-width: 1200px) {
		width: 490px;
	}
	@media (max-width: 1050px) {
		display: none;
	}
`;
export const GraphicContainer = styled.div`
	width: 90%;
	margin: 0 auto;
`;
export const RegisterFormSection = styled.section``;
export const RegisterFormContainer = styled.div``;
