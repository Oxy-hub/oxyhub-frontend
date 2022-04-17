import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import FormControl from '../../../components/FormControl';
import useRegisterUser from '../api/registerUser';

const RegisterForm = () => {
  // eslint-disable-next-line camelcase
  const { first_name, middle_name, last_name, email } = useSelector(
    state => state.auth.initialUserInfo
  );

  const dispatch = useDispatch();
  const { mutate } = useRegisterUser(dispatch);

  const validationSchema = yup.object({
    first_name: yup.string().trim().required('First name cannot be empty!'),
    middle_name: yup.string().trim().nullable(),
    last_name: yup.string().trim().required('Last name cannot be empty!')
  });

  return (
    <Formik
      initialValues={{
        first_name,
        middle_name,
        last_name,
        email
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        mutate(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <FormControl
            id="first_name"
            name="first_name"
            label="First Name"
            required
          />

          <FormControl
            id="middle_name"
            name="middle_name"
            label="Middle Name"
          />

          <FormControl
            id="last_name"
            name="last_name"
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
