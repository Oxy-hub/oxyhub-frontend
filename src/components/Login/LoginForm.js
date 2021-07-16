import {useState} from 'react';
import {Formik, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import {
	FormContainer,
	SubmitButton,
	InputContainer,
	Form,
} from './loginform.styled';
import FormHeader from './FormHeader';
const LoginForm = () => {
	const [isInputSelected, setIsInputSelected] = useState(false);

	return (
		<FormContainer>
			<FormHeader />
			<Formik
				initialValues={{
					phone_number: '',
				}}
				validationSchema={yup.object({
					phone_number: yup
						.string()
						.trim()
						.required('Cannot Be Empty!')
						.matches(/^[6-9]\d{9}$/, 'Invalid Phone Number'),
				})}
				onSubmit={() => {}}>
				{formik => (
					<Form onSubmit={formik.handleSubmit}>
						<div style={{marginBottom: '1.8em'}}>
							<InputContainer active={isInputSelected}>
								<span>+91</span>
								<input
									type='tel'
									id='phone_number'
									name='phone_number'
									maxLength='10'
									placeholder='Continue with mobile number'
									value={formik.values.phone_number}
									onChange={formik.handleChange}
									onFocus={() => {
										setIsInputSelected(true);
									}}
									onBlur={e => {
										formik.handleBlur(e);
										setIsInputSelected(false);
									}}
								/>
							</InputContainer>
							<ErrorMessage name='phone_number'>
								{msg => <span className='error'>{msg}</span>}
							</ErrorMessage>
						</div>
						<SubmitButton>Get OTP</SubmitButton>
					</Form>
				)}
			</Formik>
		</FormContainer>
	);
};

export default LoginForm;
