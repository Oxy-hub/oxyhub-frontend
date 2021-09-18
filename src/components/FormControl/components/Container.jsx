import PropType from 'prop-types';
import { Container } from './container.styled';

const FormContainer = ({ children }) => <Container>{children}</Container>;

export default FormContainer;

FormContainer.propTypes = {
  children: PropType.node.isRequired
};
