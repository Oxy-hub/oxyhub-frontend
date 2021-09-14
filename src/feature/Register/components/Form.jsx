import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import useGetUser from '../../misc/api/getUser';
import {
  InputFieldContainer,
  Label,
  ButtonContainer,
  Field
} from './form.styled';
import FormButton from '../../../components/common/Form/FormButton';

const RegisterForm = () => {
  let user;
  const { isLoading, isError, data, isFetching } = useGetUser();

  useState(() => {
    console.log('Component Remounting');
  });

  const [submitting, isSubmitting] = useState(false);

  // const initialValues =

  const validationSchema = yup.object({
    first_name: yup.string().trim().required('First name cannot be empty!'),
    middle_name: yup.string().trim().nullable(),
    last_name: yup.string().trim().required('Last name cannot be empty!')
  });

  if (data) {
    console.log(data);
    user = data.data;
  }

  if (isLoading || isFetching) {
    return <h1>Loading or Fetching...</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <Formik
      initialValues={{
        first_name: user.firstName,
        middle_name: user.middlwName,
        last_name: user.lastName,
        email: user.email
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log('Register Submit!');
        console.log(values);
        isSubmitting(state => !state);
      }}
    >
      <Form autoComplete="off">
        <InputFieldContainer>
          <Label htmlFor="first_name">
            First Name <span>*</span>
          </Label>
          <Field id="first_name" name="first_name" />
          <ErrorMessage
            name="first_name"
            id="error"
            component="p"
            data-testid="first-name-error"
          />
        </InputFieldContainer>
        <InputFieldContainer>
          <Label htmlFor="middle_name">Middle Name</Label>
          <Field id="middle_name" name="middle_name" />
          <ErrorMessage
            name="middle_name"
            id="error"
            component="p"
            data-testid="middle-name-error"
          />
        </InputFieldContainer>
        <InputFieldContainer>
          <Label htmlFor="last_name">
            Last Name <span>*</span>
          </Label>
          <Field id="last_name" name="last_name" />
          <ErrorMessage
            name="last_name"
            id="error"
            component="p"
            data-testid="last-name-error"
          />
        </InputFieldContainer>
        <InputFieldContainer>
          <Label htmlFor="email">
            Email <span>*</span>
          </Label>
          <Field id="email" name="email" disabled />
        </InputFieldContainer>

        <ButtonContainer>
          <FormButton submitting={submitting}>Save & Continue</FormButton>
        </ButtonContainer>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
