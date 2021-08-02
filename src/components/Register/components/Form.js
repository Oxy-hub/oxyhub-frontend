import {Formik, Form} from 'formik';
import {
	InputFieldContainer,
	Label,
	ButtonContainer,
	Field,
} from './form.styled';
import FormButton from '../../common/Form/FormButton';
const RegisterForm = () => {
	const initialValues = {
		first_name: 'Sabyasachi',
		middle_name: null,
		last_name: 'Karmakar',
		email: 'sabyasachi.tffs@gmail.com',
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={values => {
				console.log('Register Submit!');
				console.log(values);
			}}>
			<Form autoComplete='off'>
				<InputFieldContainer>
					<Label htmlFor='first_name'>First Name</Label>
					<Field id='first_name' name='first_name' />
				</InputFieldContainer>
				<InputFieldContainer>
					<Label htmlFor='middle_name'>Middle Name</Label>
					<Field id='middle_name' name='middle_name' />
				</InputFieldContainer>
				<InputFieldContainer>
					<Label htmlFor='last_name'>Last Name</Label>
					<Field id='last_name' name='last_name' />
				</InputFieldContainer>
				<InputFieldContainer>
					<Label htmlFor='email'>Email</Label>
					<Field id='email' name='email' disabled />
				</InputFieldContainer>

				<ButtonContainer>
					<FormButton>Save & Continue</FormButton>
				</ButtonContainer>
			</Form>
		</Formik>
	);
};

export default RegisterForm;
