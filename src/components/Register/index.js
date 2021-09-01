import { RegisterFormSection, FormContainer } from './register.styled';
import FormHeader from './components/FormHeader';
import Form from './components/Form';

const Register = () => (
  <RegisterFormSection>
    <FormContainer>
      <FormHeader />
      <Form />
    </FormContainer>
  </RegisterFormSection>
);

export default Register;
