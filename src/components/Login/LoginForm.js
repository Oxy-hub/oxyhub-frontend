import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Formik, ErrorMessage} from 'formik';
import * as yup from 'yup';
import {
	FormContainer,
	InputWrapper,
	InputContainer,
	Form,
} from './loginform.styled';
import FormHeader from './FormHeader';
import FormButton from '../common/FormButton';
import keyPressHandler from '../../utils/keyPressHandler';

const LoginForm = ({getOtp}) => {
	const [isInputSelected, setIsInputSelected] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const phone_number = useSelector(state => state.form.phone_number);
	const otpSend = useSelector(state => state.form.otpSend);

	return (
		<FormContainer>
			<FormHeader />
			<Formik
				initialValues={{
					phone_number,
				}}
				validationSchema={yup.object({
					phone_number: yup
						.string()
						.trim()
						.required('Cannot Be Empty!')
						.length(10, 'Must be 10 digits!')
						.matches(/^[1-9]\d{9}$/, 'Invalid Phone Number'),
				})}
				onSubmit={async values => {
					try {
						setIsLoading(state => !state);
						await getOtp(values.phone_number);
						if (!otpSend) throw new Error();
					} catch (e) {
						console.log('hello');
						setIsLoading(state => !state);
					}
				}}>
				{formik => (
					<Form autoComplete='off'>
						<InputWrapper>
							<InputContainer active={isInputSelected}>
								<span>+91</span>
								<input
									type='tel'
									name='phone_number'
									maxLength='10'
									placeholder='Continue with mobile number'
									value={formik.values.phone_number}
									onKeyPress={e => {
										keyPressHandler(e);
									}}
									onChange={e => {
										formik.handleChange(e);
									}}
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
						</InputWrapper>
						<FormButton id='get-otp' isLoading={isLoading}>
							Get OTP
						</FormButton>
					</Form>
				)}
			</Formik>
		</FormContainer>
	);
};

export default LoginForm;
