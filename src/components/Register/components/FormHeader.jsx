import {HeaderContainer, Heading, SubHeading} from './formheader.styled';
const FormHeader = () => {
	return (
		<HeaderContainer>
			<Heading>Complete Your Registration!</Heading>
			<SubHeading>
				Don't worry! This is an one time process only. You won't be asked to do
				it again.
			</SubHeading>
		</HeaderContainer>
	);
};
export default FormHeader;
