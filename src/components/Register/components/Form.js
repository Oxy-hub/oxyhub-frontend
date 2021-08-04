import {useState} from 'react';
import {Formik, Form, ErrorMessage} from 'formik';
import * as yup from 'yup';
import {
	InputFieldContainer,
	Label,
	ButtonContainer,
	Field,
} from './form.styled';
import FormButton from '../../common/Form/FormButton';

const RegisterForm = () => {
	const [submitting, isSubmitting] = useState(false);
	const initialValues = {
		first_name: 'Sabyasachi',
		middle_name: '',
		last_name: 'Karmakar',
		email: 'sabyasachi.tffs@gmail.com',
	};

	const validationSchema = yup.object({
		first_name: yup.string().trim().required('First name cannot be empty!'),
		middle_name: yup.string().trim().nullable(),
		last_name: yup.string().trim().required('Last name cannot be empty!'),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => {
				console.log('Register Submit!');
				console.log(values);
				isSubmitting(state => !state);
			}}>
			<Form autoComplete='off'>
				<InputFieldContainer>
					<Label htmlFor='first_name'>
						First Name <span>*</span>
					</Label>
					<Field id='first_name' name='first_name' />
					<ErrorMessage name='first_name' id='error' component='p' />
				</InputFieldContainer>
				<InputFieldContainer>
					<Label htmlFor='middle_name'>Middle Name</Label>
					<Field id='middle_name' name='middle_name' />
					<ErrorMessage name='middle_name' id='error' component='p' />
				</InputFieldContainer>
				<InputFieldContainer>
					<Label htmlFor='last_name'>
						Last Name <span>*</span>
					</Label>
					<Field id='last_name' name='last_name' />
					<ErrorMessage name='last_name' id='error' component='p' />
				</InputFieldContainer>
				<InputFieldContainer>
					<Label htmlFor='email'>
						Email <span>*</span>
					</Label>
					<Field id='email' name='email' disabled />
				</InputFieldContainer>

				<ButtonContainer>
					<FormButton submitting={submitting}>Save & Continue</FormButton>
				</ButtonContainer>
			</Form>
		</Formik>
	);
};

export default RegisterForm;
