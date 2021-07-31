import {Formik, Form, Field} from 'formik';
const RegisterForm = () => {
	const initialValues = {
		first_name: null,
		last_name: null,
		email: 'sabyasachi.tffs@gmail.com',
		id_type: null,
		id_number: null,
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={values => {
				console.log('Register Submit!');
				console.log(values);
			}}>
			<Form>
				<div>
					<label htmlFor='first_name'>First Name</label>
					<Field id='first_name' name='first_name' placeholder='John' />
					<label htmlFor='last_name'>Last Name</label>
					<Field id='last_name' name='last_name' />
				</div>
				<div>
					<label htmlFor='id_type'>Id Type</label>
					<Field id='id_type' name='id_type' as='select'>
						<option value='Aadhaar Card'>Aadhaar Card</option>
						<option value='Voter ID'>Voter ID</option>
						<option value='Random Other'>Random Other</option>
					</Field>
					<label htmlFor='id_number'>Id Number</label>
					<Field id='id_number' name='id_number' />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<Field id='email' name='email' disabled />
				</div>
			</Form>
		</Formik>
	);
};

export default RegisterForm;
