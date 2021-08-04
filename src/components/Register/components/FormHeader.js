import {HeaderContainer, Heading, SubHeading} from './formheader.styled';

const FormHeader = () => {
	return (
		<HeaderContainer>
			<Heading>One Last Step!</Heading>
			<SubHeading>Confirm your name and email id to continue . . .</SubHeading>
		</HeaderContainer>
	);
};
export default FormHeader;
