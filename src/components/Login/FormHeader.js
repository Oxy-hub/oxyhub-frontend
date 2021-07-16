import {
	FormHeading,
	FormSubheading,
	HeaderContainer,
} from './formheader.styled';

const FormHeader = () => {
	return (
		<HeaderContainer>
			<FormHeading>Let's Get Started</FormHeading>
			<FormSubheading>Enter your phone number to login</FormSubheading>
		</HeaderContainer>
	);
};

export default FormHeader;
