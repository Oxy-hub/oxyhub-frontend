import {useState} from 'react';
import {FormContainer, SubmitButton, InputContainer} from './loginform.styled';
import FormHeader from './FormHeader';
const Form = () => {
	const [isInputSelected, setIsInputSelected] = useState(false);
	console.log(isInputSelected);
	return (
		<FormContainer>
			<FormHeader />
			<form style={{padding: '0 2em'}}>
				<InputContainer active={isInputSelected}>
					<span>+91</span>
					<input
						type='text'
						placeholder='Continue with mobile number'
						onFocus={() => {
							setIsInputSelected(true);
						}}
						onBlur={() => {
							setIsInputSelected(false);
						}}
					/>
				</InputContainer>

				<SubmitButton>Get OTP</SubmitButton>
			</form>
		</FormContainer>
	);
};

export default Form;
