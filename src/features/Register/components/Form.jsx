import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FormControl from '../../../components/FormControl';
import { usePostUser } from '../api/postUser';

const RegisterForm = () => {
  const { firstName, middleName, lastName, email } = useSelector(
    state => state.initialUser
  );
  const history = useHistory();
  const { mutateAsync } = usePostUser();

  const validationSchema = yup.object({
    firstName: yup.string().trim().required('First name cannot be empty!'),
    middleName: yup.string().trim().nullable(),
    lastName: yup.string().trim().required('Last name cannot be empty!')
  });

  return (
    <Formik
      initialValues={{
        firstName,
        middleName,
        lastName,
        email
      }}
      validationSchema={validationSchema}
      onSubmit={async values => {
        try {
          await mutateAsync(values);
          history.push('/search');
        } catch (e) {
          // Do Nothing
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <FormControl
            id="first_name"
            name="firstName"
            label="First Name"
            required
          />

          <FormControl id="middle_name" name="middleName" label="Middle Name" />

          <FormControl
            id="last_name"
            name="lastName"
            label="Last Name"
            required
          />

          <FormControl
            id="email"
            name="email"
            label="Email"
            disabled
            required
          />

          <FormControl control="submit" disabled={isSubmitting}>
            Save & Continue
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
