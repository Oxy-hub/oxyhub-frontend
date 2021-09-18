import { useField, ErrorMessage } from 'formik';
import Proptypes from 'prop-types';
import { InputText } from './input.styled';
import Label from './components/Label';
import FormContainer from './components/Container';
import Error from './components/Error';

//   eslint-disable-next-line
const Input = ({ id, name, label, ...rest }) => {
  const [field] = useField(name);

  return (
    <FormContainer>
      {label && <Label text={label} htmlFor={id || name} />}
      {/* eslint-disable-next-line */}
      <InputText {...field} {...rest} />
      <ErrorMessage name={name} component={Error} />
    </FormContainer>
  );
};

export default Input;

Input.propTypes = {
  label: Proptypes.string,
  id: Proptypes.string
};

Input.defaultProps = {
  label: null,
  id: null
};
